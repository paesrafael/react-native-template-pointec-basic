import styled from 'styled-components'

const Container = styled.View``

const Text = styled.Text`
  margin: ${props => props.margin ? props.margin : '0'};
  color: #FFF;
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  text-align: center;
`

const Button = styled.TouchableHighlight`
  margin: 15px 0;
  background-color: #0050d4;
  border-radius: 10px;
`

export {
  Container, Text, Button
}
