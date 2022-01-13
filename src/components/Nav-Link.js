import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// const linkStyles = {
//     color: props => props.theme.colors.text,
//     display: 'inline-block',
//     margin: '0 0.5rem',
//     padding: '0.25rem',
//     textDecoration: 'unset'
// };

// const activeStyles = {
//     textDecoration: 'unset',
//     color: props,
//     background: `${props => props.theme.colors.primary}`
// };

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 0 .5rem;
    height: 30px;
    color: ${props => props.theme.colors.text};

    &:hover{
        position: relative;
        overflow: hidden;
        background: ${props => props.theme.colors.primary};
        &:after{
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: white;
        }
    }
`

const NavLink = ({ children, ...props }) => (
    <StyledLink {...props}>
        {children}
    </StyledLink>
    // <StyledLink
    //     {...props}
    //     style={linkStyles}
    //     activeStyle={activeStyles}
    //     getProps={({ isPartiallyCurrent }) => isPartiallyCurrent ? { style: { ...linkStyles, ...activeStyles } } : null}
    // >
    //     {children}
    // </StyledLink>
)

export default NavLink