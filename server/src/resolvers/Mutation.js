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


async function signUpAthlete(parent, args, { prisma }, info) {
    let password = await bcrypt.hash(args.password, 10)

    return await prisma.createAthlete({
        fullName: args.fullName,
        email: args.email,
        password,
        team: { connect: { id: args.team }}
    })
}

async function signUpCoach(parent, args, { prisma }, info) {
    let password = await bcrypt.hash(args.password, 10)

    return await prisma.createCoach({
        fullName: args.fullName,
        email: args.email,
        password,
        team: { connect: { id: args.team }}
    })
}

async function signUpHeadCoach(parent, args, { prisma }, info) {
    let password = await bcrypt.hash(args.password, 10)

    return await prisma.createHeadCoach({
        fullName: args.fullName,
        email: args.email,
        password,
        team: { connect: { id: args.team }}
    })
}

async function signUpParent(parent, args, { prisma }, info) {
    let password = await bcrypt.hash(args.password, 10)

    return await prisma.createParent({
        fullName: args.fullName,
        email: args.email,
        password,
        team: { connect: { id: args.team }}
    })
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
    createTeam,
    loginUser,
    createPost,
    signUpAthlete,
    signUpCoach,
    signUpParent,
    signUpHeadCoach
}

