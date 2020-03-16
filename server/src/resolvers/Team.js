function athletes(parent, args, { prisma }) {
    return prisma.team({ id: parent.id }).athletes()
}

function coaches(parent, args, { prisma }) {
    return prisma.team({ id: parent.id }).coaches()
}

async function headCoach(parent, args, { prisma }) {
    return await prisma.team({ id: parent.id }).headCoach()
}

async function subTeams(parent, args, { prisma }) {
    return await prisma.team({ id: parent.id }).subTeams()
}

module.exports = {
    athletes,
    coaches,
    headCoach,
    subTeams
}


