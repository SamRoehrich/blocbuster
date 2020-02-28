const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function loginUser(parent, args, ctx, info) {
    const user = await ctx.prisma.user({ email: args.email })

    if(!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if(!valid){
        throw new Error('Incorrect Login')
    }

    const token = jwt.sign({ userId: user.id}, APP_SECRET, { expiresIn: '30d'})

    return {
        user,
        token
    }
  }


async function signUpUser(parent, args, ctx, info) {
    let password = await bcrypt.hash(args.password, 10)

    const user = await ctx.prisma.createUser({
        ...args,
        password
    })

    return {
        user
    }
}

async function createTeam(parent, args, context, info) {
    const team = await context.prisma.createTeam({...args})

    const token = jwt.sign({ id: team.id }, APP_SECRET)

    return {
        team,
        token
    }
}

async function createPost(parent, args, { user, prisma }, info) {

    if(!user) {
        throw new Error('Not authenticated')
    }
    return prisma.createPost({
        title: args.title,
        content: args.content,
        postedBy: { connect: { id: user.userId } }
    })
}

module.exports = {
    signUpUser,
    createTeam,
    loginUser,
    createPost
}

