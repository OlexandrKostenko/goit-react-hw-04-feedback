import styled from 'styled-components'

export const NotificationMessage = styled.p`
padding: ${props => props.theme.space[4]}px;
margin: ${props => props.theme.space[4]}px;
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeights.bold};`