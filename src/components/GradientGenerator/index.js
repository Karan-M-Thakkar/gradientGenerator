import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container,
  ContentContainer,
  Heading,
  DirectionsContainer,
  Instruction,
  DirectionsList,
  ColorsContainer,
  ColorsFlexContainer,
  ColorContainer,
  ColorText,
  ColorInput,
  GradientGeneratorButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    selectedGradientDirection: gradientDirectionsList[0].value,
    selectedColorOne: '#8ae323',
    selectedColorTwo: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  updateSelectedGradientDirection = direction => {
    this.setState({
      selectedGradientDirection: direction,
    })
  }

  onChangeColorOne = event => {
    this.setState({
      selectedColorOne: event.target.value,
    })
  }

  onChangeColorTwo = event => {
    this.setState({
      selectedColorTwo: event.target.value,
    })
  }

  generateGradient = () => {
    const {
      selectedGradientDirection,
      selectedColorOne,
      selectedColorTwo,
    } = this.state
    this.setState({
      gradientValue: `to ${selectedGradientDirection}, ${selectedColorOne}, ${selectedColorTwo}`,
    })
  }

  renderGradientDirections = () => {
    const {selectedGradientDirection} = this.state
    return (
      <DirectionsContainer>
        <Instruction>Choose Direction</Instruction>
        <DirectionsList>
          {gradientDirectionsList.map(eachDirectionDetails => (
            <GradientDirectionItem
              directionDetails={eachDirectionDetails}
              isActive={
                eachDirectionDetails.value === selectedGradientDirection
              }
              updateSelectedGradientDirection={
                this.updateSelectedGradientDirection
              }
              key={eachDirectionDetails.directionId}
            />
          ))}
        </DirectionsList>
      </DirectionsContainer>
    )
  }

  renderColorInputs = () => {
    const {selectedColorOne, selectedColorTwo} = this.state
    return (
      <ColorsContainer>
        <Instruction>Pick the Colors</Instruction>
        <ColorsFlexContainer>
          <ColorContainer>
            <ColorText>{selectedColorOne}</ColorText>
            <ColorInput
              type="color"
              value={selectedColorOne}
              onChange={this.onChangeColorOne}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorText>{selectedColorTwo}</ColorText>
            <ColorInput
              type="color"
              value={selectedColorTwo}
              onChange={this.onChangeColorTwo}
            />
          </ColorContainer>
        </ColorsFlexContainer>
      </ColorsContainer>
    )
  }

  render() {
    const {gradientValue} = this.state
    return (
      <Container gradientValue={gradientValue} data-testid="gradientGenerator">
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          {this.renderGradientDirections()}
          {this.renderColorInputs()}
          <GradientGeneratorButton onClick={this.generateGradient}>
            Generate
          </GradientGeneratorButton>
        </ContentContainer>
      </Container>
    )
  }
}

export default GradientGenerator
