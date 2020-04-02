import styled from 'styled-components'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import Button from '../components/styled/Button'

import {LOGIN_USER_MUTATION} from '../lib/mutations'

const LoginForm = styled.form`
    border: 1px solid black;
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Login = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [loginUser] = useMutation(LOGIN_USER_MUTATION, {
        onCompleted(data) {
            localStorage.setItem('token', data.loginUser.token)
        }
    })
    return (
        <LoginForm
            onSubmit={e => {
                e.preventDefault();
                loginUser({ variables: {
                    email,
                    password
                }})
            }}
        >
            <input 
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button>Log in</Button>
        </LoginForm>
    )
}

export default Login