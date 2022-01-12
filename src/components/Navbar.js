import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding: 0 ${props => props.theme.spaceLayout};
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &:after{
        position: absolute;
        content: "",
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: blue;
        z-index: 1;
    }
`
const Brand = styled.div`
    font-size: 1.5em;
    letter-spacing: 1px;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.heading}
`

function Navbar() {
    return (
        <Navigation>
            <Brand>Bitaska</Brand>
        </Navigation>
    )
}

export default Navbar
