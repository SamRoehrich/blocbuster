async function team(parent, args, { prisma  }) {
    return await prisma.athlete({ id: parent.id }).team()
}

async function stats(parent, args, { prisma }) {
    return await prisma.athlete({ id: parent.id }).athleteStats()
}
module.exports = {
    team,
    stats,
}

