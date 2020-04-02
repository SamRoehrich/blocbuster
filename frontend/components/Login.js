import { useState } from 'react'
import { useQuery ,useMutation, gql } from '@apollo/client'
import styled from 'styled-components'

const LOGIN_MUTATION = gql`
    mutation LOGIN_USER($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
        }
    }
`

const ALL_USER_QUERY = gql`
    query {
        users {
            id
            fullName
        }
    }
`

const LoginForm = styled.form`
    height: 800px;
    border: 1px solid black;
`

const FormInput = styled.input`
    height: 100px;
    width: 80%;
    border: 1px solid black;
`

const Button = styled.button`
    background-color: blue;
    border-radius: 10px;
    height: 50px;
    width: 100px;
`

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [loginUser, { data }] = useMutation(LOGIN_MUTATION)

    return (
        <LoginForm 
            onSubmit={e => {
                e.preventDefault()
                loginUser({ variables: { email, password }})
                console.log(data)
                setEmail('')
                setPassword('')
            }}
            >
            <FormInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
             <FormInput
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="password"
            />

            <Button type="submit">Log In</Button>
        </LoginForm>
    )
}

export default Login