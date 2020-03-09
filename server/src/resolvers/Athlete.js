async function athlete(parent, args, { prisma }) {
    return await prisma.user({ id: parent.id }).athlete()
}

module.exports = {
    athlete,
}