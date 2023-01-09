import styled from 'styled-components'

export const Button = styled.button`
padding: ${props => props.theme.space[3]}px;
margin: ${props => props.theme.space[4]}px;
width: ${props => props.theme.space[7]}px;
background-color: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.white};
border: ${props => props.theme.borders.normal} ${props => props.theme.colors.border};
border-radius: ${props => props.theme.radii.normal};
font-size: ${props => props.theme.fontSizes.m};
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
cursor: pointer;
:hover {
    background-color: ${props => props.theme.colors.accent};
    
}` 