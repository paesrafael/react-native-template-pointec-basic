import styled from 'styled-components'

const Container = styled.View`
  background-color: #c11c32;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Image = styled.Image``

const Title = styled.Text`
  margin: ${props => props.margin ? props.margin : '0'};
  color: #FFF;
  font-size: 18px;
`

export {
  Container, Image, Title
}
