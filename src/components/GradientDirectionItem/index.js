import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, updateSelectedGradientDirection} = props
  const {value, displayText} = directionDetails
  const onClickDirectionButton = () => {
    updateSelectedGradientDirection(value)
  }
  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        onClick={onClickDirectionButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
