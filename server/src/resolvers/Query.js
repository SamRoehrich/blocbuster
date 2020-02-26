async function getAthletes(args, context) {
    return await context.prisma.Athletes()
}

async function getCoaches(args, context) {
    return await context.prisma.Coaches()
}

module.exports = {
    getAthletes,
    getCoaches
}

