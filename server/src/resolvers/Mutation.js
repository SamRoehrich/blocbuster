const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { APP_SECRET, getUserId } = require('../utils')


async function signupUser(parent, args, { prisma }, info) {
    //1: check is passwords are valid
    if(args.password !== args.confirmPassword) throw new Error('Passwords do not match')
    //2: hash password if they match
    const password = await bcrypt.hash(args.password, 10)
    //3: get team
    const team = await prisma.team({ id: args.teamId })
    //4: check team key matches
    if(args.teamKey !== team.teamKey) throw new Error('Invalid team key')
    //5: check if coach key matches
    if(args.coachKey == team.coachKey){
        //6: if coach key matches create a user
        const user = await prisma.createUser({
            fullName: args.fullName,
            email: args.email,
            phoneNumber: args.phoneNumber,
            DOB: args.dob,
            password,
            team:{ connect: { id: team.id } },
            userType: 'COACH',
            permissions: {set: ['POST']},
         })
        // create coach with that user account and assign coach to coach column in db
        const coach = await prisma.createCoach({
            user: { connect: { id: user.id } },
            team: { connect: { id: team.id }}
        })

        const token = jwt.sign({ user: user.id }, APP_SECRET, { expiresIn: '30d'})

        return { user, token }
    } else {
        //7: create athlete account if coach key fails
        const user = await prisma.createUser({
            fullName: args.fullName,
            email: args.email,
            phoneNumber: args.phoneNumber,
            DOB: args.dob,
            password,
            team:{ connect: { id: team.id } },
            userType: 'ATHLETE',
            permissions: { set: ['POST']}
         })

         const athlete = await prisma.createAthlete({
             user: { connect: { id: user.id }},
             team: { connect: { id: team.id }}
            })
            //TODO: send confirmation email
            
            //9: create token
            const token = jwt.sign({ user: user.id }, APP_SECRET, { expiresIn: '30d'})
            
            //9: return user and token
            return { user, token }
    }
}

async function loginUser(parent, args, { prisma }, info) {
    const user = await prisma.user({ email: args.email })

    if(!user) throw new Error('No user found with this email')

    const valid = bcrypt.compare(args.password, user.password)
    if(!valid) throw new Error('Incorrect password')

    const token = jwt.sign({ user: user.id }, APP_SECRET, { expiresIn: '30d'})

    return { user, token }
}

async function createCoach(parent, args, { prisma }, info){
    const user = await prisma.user({ id: args.userId })
    const team = await prisma.team({ id: args.teamId})

    if(team.coachKey !== args.coachKey){
        throw new Error('Coach key inalid.')
    }


}

async function createAthlete(parent, args, { prisma }, info){
    const user = await prisma.user({ id: args.id })
}


async function requestReset(parent, args, { prisma }, info) {
    //check if user
    const user = prisma.user({ email: args.email })
    if(!user) throw new Error('No user found with this email')
    //assing reset info to user
    const randomBytesPromiseified = promisify(randomBytes)
    const resetToken = (await randomBytesPromiseified(20)).toString('hex')
    const resetTokenExpiry = Date.now() + 3600000 // 1 hour from now
    const res = await prisma.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    //TODO: send email with reset link

    return { message: 'Nice'}
}

async function resetPassword(parent, args, { prisma }, info) {
    if(args.password !== args.confirmPassword) throw new Error('Passwords dont match')

    const [user] = prisma.user({
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
    })

    if(!user) throw new Error('Token has expired')

    const password = await bcrypt.hash(args.password, 10)

    const updatedUser = prisma.updateUser({ 
        where: { email: user.email },
        data: {
            password,
            resetToken: null,
            resetTokenExpiry: null
        }
    })

    const token = jwt.sign({ user: user.id }, APP_SECRET, { expiresIn: '30d'})

    return { updatedUser, token }
}

async function createTeam(parent, args, context, info) {
    const team = await context.prisma.createTeam({...args})

    return {
        team,
    }
}

async function createPost(parent, args, { user, prisma }, info) {

    if(!user) {
        throw new Error('Not authenticated')
    }

    return prisma.createPost({
        title: args.title,
        content: args.content,
        postedBy: { connect: { id: user.coachId } }
    })
}

async function createAthleteStats(parent, args, { user, prisma }, info) {

    const athlete = prisma.athlete({ id: args.athlete })

    return await prisma.createAthleteStats({
        ...args,
        createdBy: { connect: { id: user.coachId } },
        athlete: { connect: { id: args.athlete } }
    })
}


async function createSubTeam(parent, args, { user, prisma }, info) {
    
    return await prisma.createSubTeam({
        ...args,
        parentTeam: { connect: { id: args.parentTeam }},
        headCoach: { connect: { id: user.headCoachId }}
    })
}

module.exports = {
    createTeam,
    signupUser,
    loginUser,
    createPost,
    createAthleteStats,
    createSubTeam,
}
