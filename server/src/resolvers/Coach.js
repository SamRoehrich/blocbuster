async function team(parent, args, { prisma }, info) {
    return await prisma.coach({id: parent.id}).team()
}

async function user(parent, args, { prisma  }) {
    return await prisma.coach({ id: parent.id }).user()
}
module.exports = {
    team,
    user
}