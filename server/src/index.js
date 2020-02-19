const fs = require('fs')
const { ApolloServer, gql } = require('apollo-server')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.gql'), 'utf8')}`

const resolvers = {
    Query,
    Mutation
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma,
    }
})

server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`)
})