const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function createTeam(parent, args, context, info) {

    const team = await context.prisma.createTeam({ ...args })

    const token = jwt.sign({ id: team.id }, APP_SECRET)

    return {
        team,
        token
    }
}


async function signUpAthlete(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    const athlete = await context.prisma.createAthlete({ ...args, password})

    const token = jwt.sign({ id: athlete.id }, APP_SECRET)

    return {
        token,
        athlete
    }
}

async function createHeadCoach(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    const coach = await context.prisma.createHeadCoach({ ...args, password })

    const token = jwt.sign({ id: coach.id }, APP_SECRET)

    return {
        token,
        coach
    }
}

async function signUpCoach(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    const coach = await context.prisma.createCoach({ ...args, password })

    const token = jwt.sign({ id: coach.id }, APP_SECRET)

    return {
        token,
        coach
    }
}


async function loginAthlete(parent, args, context, info) {
    const user = await context.prisma.athlete({ email: args.email })
    if(!user){
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if(!valid) {
        throw new Error('Invalid Password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return{
        token,
        user,
    }
}

async function loginCoach(parent, args, context, info) {
    const coach = await context.prisma.coach({ email: args.email })
    if(!coach){
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, coach.password)
    if(!valid) {
        throw new Error('Invalid Password')
    }

    const token = jwt.sign({ coachId: coach.id }, APP_SECRET)

    return{
        token,
        coach,
    }
}

module.exports = {
    createTeam,
    createHeadCoach,
    signUpAthlete,
    signUpCoach,
    loginAthlete,
    loginCoach,
}
