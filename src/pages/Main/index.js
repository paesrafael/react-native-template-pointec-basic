import React from 'react'
import logo from '~/assets/pointec-logo.png'

import Details from '~/components/Details'

import {
  Container, Image, Title
} from './styles'

export default function Main() {
  return (
    <Container>
      <Image source={logo} />

      <Title margin="15px 0 0 0">Bem vindo(a) ao Template POINTEC Basic</Title>
      <Title>Welcome to the Template POINTEC Basic</Title>

      <Details />
    </Container>
  )
}
