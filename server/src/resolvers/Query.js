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

async function getTeamInfo(parent, args, { user, prisma }, info) {
    if(!user) {
        throw new Error('Not Authenticated')
    }

    const fullUser = await prisma.user({ id: user.userId })

    console.log(fullUser)

    const team = await prisma.team({ id: fullUser.teamId})

    return team
}

async function getTeamById(parent, args, { prisma }, info) {

    const team  = await prisma.team({ id: args.id })

    return team
}

module.exports = {
    getUser,
    currentUser,
    getTeamInfo,
    getTeamById
}


