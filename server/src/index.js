const fs = require('fs')
const { ApolloServer, gql } = require('apollo-server')
const { prisma } = require('./generated/prisma-client')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('./utils')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Team = require('./resolvers/Team')
const Coach = require('./resolvers/Coach')
const HeadCoach = require('./resolvers/HeadCoach')
const Athlete = require('./resolvers/Athlete')
const Post = require('./resolvers/Post')
const AthleteStats = require('./resolvers/AthleteStats')
const SubTeam = require('./resolvers/SubTeam')
const User = require('./resolvers/User')

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.gql'), 'utf8')}`

const resolvers = {
    Query,
    Mutation,
    Team,
    Coach,
    Athlete,
    AthleteStats,
    HeadCoach,
    Post,
    SubTeam,
    User
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
    },
    tracing: true,
    engine: {
        apiKey: "service:blocBuster:uukDWPJmAxI1ICdlT0ofpg"
    }
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

