import React, { useCallback } from 'react'
import { Linking } from 'react-native'

import {
  Container, Button, Text
} from './styles'

export default function Details() {
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url)

      if (supported)
        await Linking.openURL(url)
    }, [url])

    return (
      <Button
        title={children}
        onPress={handlePress}
        underlayColor="#0050d4"
      >
        <Text
          margin="15px 0"
          fontSize="22px"
        >Visite: www.pointec.dev</Text>
      </Button>
    )
  }

  return (
    <Container>
      <Text margin="5px 0 0 0">Apenas para criar um componente padrão</Text>

      <OpenURLButton url="https://pointec.dev/" />
    </Container>
  )
}
