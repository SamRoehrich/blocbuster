import { useState } from 'react'
import { useQuery ,useMutation, gql } from 'apollo-client'
import styled from 'styled-components'

import Button from './styled/Button'

const SignupForm = styled.form`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CreateTeam = () => {

    return (
        <SignupForm>
            <p>Create a team</p>
            <Button>Create Team!</Button>
        </SignupForm>
    )
}

export default CreateTeam