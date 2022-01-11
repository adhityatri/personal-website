import React from 'react'
import Navbar from './Navbar'
import Theme from '../theme'
import styled from 'styled-components'

const Content = styled.div`
    padding: ${props => props.theme.space};
    border: 1px solid ${props => props.theme.colors.primary};
`

function Layouts({ children }) {
    return (
        <Theme>
            <Navbar />
            <Content>
                {children}
            </Content>
        </Theme>
    )
}

export default Layouts
