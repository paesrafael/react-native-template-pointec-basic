import React, { useCallback } from 'react'
import { Linking } from 'react-native'

import {
  Container, Button, Text
} from './styles'

export default function Details() {
  const OpenURLButton = ({ url, children, text }) => {
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
        >
          {text}
        </Text>
      </Button>
    )
  }

  return (
    <Container>
      <Text
        margin="5px 0 0 0"
        lineHeight="30"
      >
        Olá, agradecemos por escolher o Template POINTEC Basic.
        Se puder, deixe sua estrela no repositório do GitHub. Valeuuuu.
      </Text>

      <Text
        margin="25px 0 0 0"
        lineHeight="30"
      >
        Hello, thank you for choosing the POINTEC Basic Template.
        If you can, leave your star in the GitHub repository. Thanks.
      </Text>

      <OpenURLButton
        url="https://github.com/paesrafael/react-native-template-pointec-basic"
        text="GitHub"
      />

      <OpenURLButton
        url="https://pointec.dev/"
        text="www.pointec.dev"
      />
    </Container>
  )
}
