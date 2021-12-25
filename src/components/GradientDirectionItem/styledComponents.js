import styled from 'styled-components'

export const DirectionItem = styled.li`
  width: 49%;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
    width: 100%;
    background-color; #ffffff79;
    padding: 8px;
    font-size: 16px;
    margin-bottom: 8px;
    cursor: pointer;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
    border: 0;
    border-radius: 8px;
`
