import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Meta from './Meta'

const StyledPage = styled.div`
    background: white;
    color: black
`

const Inner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
`

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}
export default Page