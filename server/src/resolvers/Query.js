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

module.exports = {
    getUser,
    currentUser,
}

