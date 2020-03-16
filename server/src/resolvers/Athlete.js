async function team(parent, args, { prisma  }) {
    return await prisma.athlete({ id: parent.id }).team()
}

async function stats(parent, args, { prisma }) {
    return await prisma.athlete({ id: parent.id }).athleteStats()
}

async function subTeam(parent, args, { prisma }) {
    return await prisma.athlete({ id: parent.id }).subTeam()
}

module.exports = {
    team,
    stats,
    subTeam
}

