const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function loginUser(parent, args, ctx, info) {
    const user = await ctx.prisma.user({ email: args.email })

    if(!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if(!valid){
        throw new Error('Incorrect Login')
    }

    const token = jwt.sign({ userId: user.id}, APP_SECRET, { expiresIn: '30d'})

    return {
        user,
        token
    }
  }

async function signUpUser(parent, args, { prisma }, info) {
    let password = await bcrypt.hash(args.password, 10)

    const team = await prisma.team({ id: args.team })

    const user = await prisma.createUser({
        ...args,
        password,
        team: { connect: { id: team.id } }
    })
    //create special user based on user type from args
    switch(args.userType) {
        case "ATHLETE":
            createAthlete(user, team, prisma)
            break
        case "COACH":
            createCoach(user, team, prisma)
            break
        case "HEAD_COACH":
            createHeadCoach(user, team, prisma)
            break
        case "PARENT":
            createParent(user, team, prisma)
            break
        default:
            throw new Error('ERROR')
    }

    return {
        user
    }
}

async function createAthlete(user, team, prisma) {
    //create athlete
    const athlete = await prisma.createAthlete({
       user: { connect: { id: user.id } }
    })
    //update the team to show the newly created athlete
    const updatedTeam = await prisma.updateTeam({
        where: { id: team.id },
        data: {
            athletes: {
                connect: {
                    id: athlete.id,
                }
            }
        },
    })
    return {athlete, updatedTeam}
}

async function createCoach(user, team, prisma) {

    const coach = await prisma.createCoach({
       user: { connect: { id: user.id } }
    })

    const updatedTeam = await prisma.updateTeam({
        where: { id: team.id },
        data: {
            coahces: {
                connect: {
                    id: coach.id,
                }
            }
        },
    })

    return {
        coach,
        updatedTeam
    }
}

async function createHeadCoach(user, team, prisma) {

    const headCoach = await prisma.createHeadCoach({
       user: { connect: { id: user.id } }
    })

    const updatedTeam = await prisma.updateTeam({
        where: { id: team.id },
        data: {
            headCoach: {
                connect: {
                    id: headCoach.id,
                }
            }
        },
    })

    return {
        headCoach,
        updatedTeam
    }
}

async function createParent(user, team, prisma) {

    const parent = await prisma.createParent({
       user: { connect: { id: user.id } }
    })

    return parent
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
        postedBy: { connect: { id: user.userId } }
    })
}

module.exports = {
    signUpUser,
    createTeam,
    loginUser,
    createPost
}

