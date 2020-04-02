//this page allows users to either sign up to an existing team
//or create a new team

//layout
//2 buttons to toggle which form is shown
import { useState } from 'react'
import styled from 'styled-components'

import Signup from '../components/Signup'
import CreateTeam from '../components/CreateTeam'

const SignupPageContainer = styled.div`
    border: 1px solid black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Button = styled.button`
    background-color: blue;
    border-radius: 10px;
    height: 50px;
    width: 100px;
`

const SignupPage = () => {

    const [createTeamButtonActive, setCreateTeamButtonActive] = useState(false)
    return (
        <SignupPageContainer>
            <ButtonContainer>    
                <Button onClick={() => setCreateTeamButtonActive(false)}>Join your team</Button>
                <Button onClick={() => setCreateTeamButtonActive(true)}>Create a team</Button>
            </ButtonContainer>
            {
                !createTeamButtonActive ? <Signup /> : <CreateTeam />
            }
        </SignupPageContainer>
    )

}

export default SignupPage