import styled from 'styled-components'

export const NavWrapper = styled.div`
    background-color: ${props => props.theme.colors.primary};
    border: 1px dashed orange;
    text-align: center;
    font-weight: bold;
    padding: ${props => props.theme.space};
`