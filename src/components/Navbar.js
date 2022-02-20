import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import NavLink from './Nav-Link'

const Navigation = styled.nav`
`

const Brand = styled.div`
    font-size: 1.3em;
    font-weight: 600;
    font-family: ${props => props.theme.fonts.heading};
    color: ${props => props.theme.colors.text};
    letter-spacing : 4px;
`

const Header = styled.header`
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding: 0 ${props => props.theme.space};
    @media ${props => props.theme.breakpoints.md}{
        padding: 0 ${props => props.theme.layout.space};
    }
    @media ${props => props.theme.breakpoints.xxl}{
        padding: 0 ${props => props.theme.layout.spaceLarge};
    }
    height: 50px;
    display: flex;
    align-items: center;
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items : center;
    backdrop-filter: blur(3px);
    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${props => props.theme.colors.primary};
        opacity: 0.2;
        content: '';
        z-index: -1;
    }
`

function Navbar({ children }) {
    return (
        <Header>
            <Brand>
                <Link to="/">ATWU</Link>
            </Brand>
            <Navigation>
                <NavLink to="/works">Works</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
    )
}

export default Navbar
