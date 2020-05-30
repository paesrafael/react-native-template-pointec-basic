import React from 'react'
import logo from '~/assets/pointec-logo.png'

import {
  Container, Image, Title
} from './styles'

export default function Main() {
  return (
    <Container>
      <Image source={logo} />
      <Title>Bem vindo(a) ao template Basic da POINTEC</Title>
    </Container>
  )
}
