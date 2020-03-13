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

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.gql'), 'utf8')}`

const resolvers = {
    Query,
    Mutation,
    Team,
    Coach,
    Athlete,
    HeadCoach,
    Post,
    User: {
        
        __resolveType(obj, ctx, info) {

            console.log(obj)

            if(obj.athleteSchedule) {
                return 'Athlete'
            }

            if(obj.subTeams) {
                return 'Coach'
            }

            if(obj.athlete) {
                return 'Parent'
            }

            else {
                return 'HeadCoach'
            }
        }
    }
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
})

server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`)
})
