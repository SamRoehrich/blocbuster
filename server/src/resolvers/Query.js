function getUser(args, context) {
    return context.prisma.user()
}

module.exports = {
    getUser,
}