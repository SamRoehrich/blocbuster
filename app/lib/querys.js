import gql from 'graphql-tag'

export const ALL_TEAMS_QUERY = gql`
    query ALL_TEAMS_QUERY{
        getAllTeams {
            teamName
            id
        }
    }
`