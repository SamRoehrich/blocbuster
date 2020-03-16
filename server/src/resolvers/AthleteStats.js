async function athlete(parent, args, { prisma }) {
    return await prisma.athleteStats({ id: parent.id }).athlete()
}

module.exports = {
    athlete
}