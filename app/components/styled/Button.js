import styled from 'styled-components'

const Button = styled.button`
    width: 20%; 
    background: white;
    color: blue;
    margin: 0 auto;
    font-size: 2rem;
    border: 1px solid blue;
    z-index: 2;

    &:active {
        text-decoration: none;
    }
`

export default Button