async function getUser(parent, args, ctx, info) {
    const user = await ctx.prisma.user({ email: args.email })

    return {
        user
    }
}

async function currentUser(parent, args, { user, prisma }, info) {
    if(!user) {
        throw new Error('Not Authenticated')
    }
    return prisma.user({ id: user.userId })
}

async function getTeamById(parent, args, { prisma }, info) {

    const team  = await prisma.team({ id: args.id })

    return team
}


async function getAthletes(parent, args, { user, prisma }, info) {
    if(!user) {
        throw new Error('Not Authenticated')
    }

    const athletes = await prisma.athletes({}, info)

    return athletes
}

async function coachDetails(parent, args, { user, prisma }, info) {
    if(!user) {
        throw new Error('Not Authenticted')
    }
    console.log(user)
    return prisma.coach({ id: user.coachId })
}

module.exports = {
    getUser,
    currentUser,
    getTeamById,
    getAthletes,
    coachDetails
}


