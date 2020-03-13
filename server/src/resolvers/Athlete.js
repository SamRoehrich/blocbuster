async function team(parent, args, { prisma  }) {
    return await prisma.athlete({ id: parent.id }).team()
}

module.exports = {
    team
}
