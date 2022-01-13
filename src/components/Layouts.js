import React from 'react'
import Navbar from './Navbar'
import Theme from '../theme'
import GlobalStyle from '../theme/global.style'
import styled from 'styled-components'

const Content = styled.div`
    margin: 0 ${props => props.theme.layout.space};
    padding: ${props => props.theme.space} 0;
    @media ${props => props.theme.breakpoints.xxl}{
        margin: 0 ${props => props.theme.layout.spaceLarge};
    }
`

function Layouts({ children }) {
    return (
        <Theme>
            <GlobalStyle />
            <Navbar />
            <Content>
                {children}
            </Content>
        </Theme>
    )
}

export default Layouts
