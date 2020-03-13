async function team(parent, args, { prisma }, info) {
    return await prisma.coach({id: parent.id}).team()
}

module.exports = {
    team,
}