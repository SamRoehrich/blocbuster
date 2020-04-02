//this component controlls the signup for any athlete or coach
//arguments: fullName, email, password, team, keys

//TODO 
//reset form after submit
//fix select so that first value in getAllTeams array is set to state on initial load

import { useState } from 'react'
import { useQuery ,useMutation, gql } from '@apollo/react-hooks'
import styled from 'styled-components'

import { ALL_TEAMS_QUERY } from '../lib/querys'
import { SIGNUP_USER_MUTATION } from '../lib/mutations'

import Button from './styled/Button'

const SignupForm = styled.form`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    width: 80%;
    font-size: 1.8rem;
    cursor: pointer;

    &:active {
        text-decoration: none;
    }
`

const Signup = () => {

    const { loading, data } = useQuery(ALL_TEAMS_QUERY)
    const [signupUser] = useMutation(SIGNUP_USER_MUTATION)
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ dob, setDob ] = useState('')
    const [ teamId, setTeamId ] = useState('')
    const [ teamKey, setTeamKey ] = useState('')
    const [ coachKey, setCoachKey ] = useState('')

    if(loading) return <p>Loading...</p>
    if(data) {
    return (
        <SignupForm onSubmit={e => {
            e.preventDefault()
            signupUser({ variables: {
                fullName,
                email,
                password,
                confirmPassword,
                phoneNumber,
                dob,
                teamId,
                teamKey,
                coachKey,
            }})
        }}>
            <p>Join your team</p>
            <select name="team" onChange={e  => setTeamId(e.target.value)}>
                {data.getAllTeams.map(team => (
                    <option key={team.id} value={team.id}>
                        {team.teamName}
                    </option>
                ))}
            </select> 
            <Input 
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                type='text'
                placeholder='Full Name'
                required
            />

            <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                placeholder='Email Address'
                required
            />

            <Input
                value={dob}
                onChange={e => setDob(e.target.value)}
                type='text'
                placeholder='Date of Birth (mm/dd/yyyy)'
                required
            />

            <Input
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                type='text'
                placeholder='Phone number (xxx-xxx-xxxx)'
                required
            />

            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                placeholder='Enter password'
                required
            />

            <Input
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type='password'
                placeholder='Confirm password'
                required
            />

            <Input 
                value={teamKey}
                onChange={e => setTeamKey(e.target.value)}
                type='text'
                placeholder='Enter Team Key'
                required
            />

            <Input 
                value={coachKey}
                onChange={e => setCoachKey(e.target.value)}
                type='text'
                placeholder='Enter the coach key (Optional: Requried for coaches to get proper access)'
            />          
            <Button>Sign up!</Button>
        </SignupForm>
    )
            }
}

export default Signup