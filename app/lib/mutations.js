import gql from 'graphql-tag'

export const SIGNUP_USER_MUTATION = gql`
    mutation SIGNUP_USER_MUTATION(
        $fullName: String!,
        $email: String!,
        $password: String!,
        $confirmPassword: String!,
        $teamId: String!,
        $teamKey: String!,
        $coachKey: String,
    ) {
        signupUser(
            fullName: $fullName
            email: $email
            password: $password
            confirmPassword: $confirmPassword
            teamId: $teamId
            teamKey: $teamKey
            coachKey: $coachKey
        ){
            token
            user {
                id
            }
        }
    }
`

export const LOGIN_USER_MUTATION = gql`
    mutation LOGIN_USER_MUTATION(
        $email: String!,
        $password: String!
    ) {
        loginUser(
            email: $email
            password: $password
        ) {
            token
            user {
                id
                fullName
            }
        }
    }
`