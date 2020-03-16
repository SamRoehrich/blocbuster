const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function loginCoach(parent, args, ctx, info) {
    const coach = await ctx.prisma.coach({ email: args.email })

    if(!coach) {
        throw new Error('No such coach found')
    }

    const valid = await bcrypt.compare(args.password, coach.password)
    if(!valid){
        throw new Error('Incorrect Login')
    }

    const token = jwt.sign({ coachId: coach.id}, APP_SECRET, { expiresIn: '30d'})

    return {
        coach,
        token
    }
}

async function loginHeadCoach(parent, args, { user, prisma }) {
    const headCoach = await prisma.headCoach({ email: args.email })

    if(!headCoach) { throw new Error('No such user found')}

    const valid = await bcrypt.compare(args.password, headCoach.password)
    if(!valid) {throw new Error('Incorrect Login')}

    const token = jwt.sign({ headCoachId: headCoach.id}, APP_SECRET, { expiresIn: '30d'})

    return {
        headCoach,
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
    loginCoach,
    loginHeadCoach,
    createPost,
    signUpAthlete,
    signUpCoach,
    signUpParent,
    signUpHeadCoach,
    createAthleteStats,
    createSubTeam,
}
