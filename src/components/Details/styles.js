import styled from 'styled-components'

const Container = styled.View`
  padding: 20px;
`

const Text = styled.Text`
  margin: ${props => props.margin ? props.margin : '0'};
  color: #FFF;
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  text-align: center;
  line-height: ${props => props.lineHeight ? props.lineHeight : '22'};
`

const Button = styled.TouchableHighlight`
  margin: 15px 0;
  background-color: #4a7ccf;
  border-radius: 10px;
`

export {
  Container, Text, Button
}
