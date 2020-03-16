async function team(parent, args, { prisma }) {
    return await prisma.headCoach({ id: parent.id }).team()
}

module.exports = {
    team
}