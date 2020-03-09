function postedBy(parent, args, { prisma }) {
    return prisma.post({ id: parent.id }).postedBy()
}

module.exports = {
    postedBy,
    
}