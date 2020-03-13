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

async function getAthletes(parent, args, { prisma }, info) {
    const athletes = await prisma.athletes({}, info)

    return athletes
}

module.exports = {
    getUser,
    currentUser,
    getTeamById,
    getAthletes
}


