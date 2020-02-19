function createUser(parent, args, context, info) {
    return context.prisma.createUser({
        id: args.id,
        userName: args.userName
    })
}