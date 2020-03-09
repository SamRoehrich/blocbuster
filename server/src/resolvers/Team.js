function athletes(parent, args, { prisma }) {
    return prisma.team({ id: parent.id }).athletes()
}

function coaches(parent, args, { prisma }) {
    return prisma.team({ id: parent.id }).coaches()
}

module.exports = {
    athletes,
    coaches
}