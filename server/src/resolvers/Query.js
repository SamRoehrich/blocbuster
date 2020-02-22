function getUsers(args, context) {
    return context.prisma.Users()
}

async function getUser(parent, args, context) {
    return 
}

module.exports = {
    getUsers,
}