function posts(parent, args, { prisma }) {
    return prisma.user({ id: parent.id }).posts()
}

function team(parent, args, { prisma }) {
    return prisma.user({ id:parent.id }).team()
}
module.exports = {
    posts,
    team
}

