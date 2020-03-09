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
    console.log(team)

    const user = await prisma.createUser({
        ...args,
        password,
        team: { connect: { id: team.id } }
    })
    //create special user based on user type from args
    switch(args.userType) {
        case "ATHLETE":
            athlete = createAthlete(user, prisma)
            upsertTeam(athlete, prisma)
            break
        case "COACH":
            createCoach(user, prisma)
            break
        case "HEAD_COACH":
            createHeadCoach(user, prisma)
            break
        case "PARENT":
            createParent(user, prisma)
            break
        default:
            createAthlete(user, prisma)
    }

    return {
        user
    }
}

async function createAthlete(user, prisma) {

    const athlete = await prisma.createAthlete({
       user: { connect: { id: user.id } }
    })

    return athlete
}

async function createCoach(user, prisma) {

    const coach = await prisma.createCoach({
       user: { connect: { id: user.id } }
    })

    return coach
}

async function createHeadCoach(user, prisma) {

    const headCoach = await prisma.createHeadCoach({
       user: { connect: { id: user.id } }
    })

    return headCoach
}

async function createParent(user, prisma) {

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

