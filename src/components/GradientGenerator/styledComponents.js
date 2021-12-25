import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: 990px;
    margin: 0 auto;
  }
`

export const Heading = styled.h1`
  color: #ededed;
  text-align: center;
  margin-bottom: 48px;
`

export const DirectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`

export const Instruction = styled.p`
  color: #ededed;
  text-align: center;
  font-size: 24px;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`

export const DirectionsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 64px;
  align-self: center;
`

export const ColorsFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorText = styled.p`
  color: #ededed;
  margin-bottom: 16px;
`

export const ColorInput = styled.input`
  width: 80px;
  height: 30px;
  border: 0;
  cursor: pointer;
`

export const GradientGeneratorButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  width: 120px;
  align-self: center;
`
