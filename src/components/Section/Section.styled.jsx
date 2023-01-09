import styled from 'styled-components'

export const Section = styled.section`
padding: ${props => props.theme.space[4]}px;
margin: ${props => props.theme.space[4]}px;`

export const Title = styled.h2`
font-size: ${props => props.theme.fontSizes.l};
font-weight: ${props => props.theme.fontWeights.bold};`