async function team(parent, args, { prisma }, info) {
    return await prisma.coach({id: parent.id}).team()
}

async function coach(parent, args, { prisma }) {
    return await prisma.user({ id: parent.id }).coach()
}

module.exports = {
    team,
    coach,
}