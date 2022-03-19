import React from 'react'
import styled from 'styled-components'
import error from '../assets/error.gif'

const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 100%;
    }
`

export default function ErrorPage() {
  return (
    <Container>
        <img src={error} alt='gif-error' />
    </Container>
  )
}
