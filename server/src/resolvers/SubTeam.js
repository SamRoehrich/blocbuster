async function athletes(parent, args, { prisma }) {
    return await prisma.subTeam({ id: parent.id }).athletes()
}

async function coaches(parent, args, { prisma }) {
    return await prisma.subTeam({ id: parent.id }).coaches()
}

async function headCoach(parent, args, { prisma }) {
    return await prisma.subTeam({ id: parent.id }).headCoach()
}

module.exports = {
    athletes,
    coaches,
    headCoach
}