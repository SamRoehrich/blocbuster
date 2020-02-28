const fs = require('fs')
const { ApolloServer, gql } = require('apollo-server')
const { prisma } = require('./generated/prisma-client')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('./utils')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.gql'), 'utf8')}`

const resolvers = {
    Query,
    Mutation,
    User: {
        posts(parent) {
            return prisma.user({ id: parent.id }).posts()
        }
    },
    Post: {
        postedBy(parent) {
            return prisma.post({ id: parent.id }).postedBy()
        }
    }, 
}

const getUser = token => {
    try {
        if(token) {
            return jwt.verify(token, APP_SECRET)
        }
        return null
   } catch (err) {
       return null
   }
}

const server = new ApolloServer({
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    },
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const tokenWithBearer = req.headers.authorization || ''
        const token = tokenWithBearer.split(' ')[1]
        const user = getUser(token)

        return {
            user,
            prisma
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`)
})
