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
    Mutation
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
        origin: '*',
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
