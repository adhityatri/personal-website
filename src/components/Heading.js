import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
    font-family: ${props => props.theme.fonts.heading};
    font-size : 1.4em;
    padding-bottom: 6px;
    font-weight: bold;
    position: relative;
    color: ${props => props.theme.colors.text};

    &:before{
        position: absolute;
        content: "";
        height: 4px;
        right: 0;
        left: 0;
        bottom: 0;
        background: ${props => props.theme.colors.text};
    }
`

export default function Heading({ children }) {
    return <Title>{children}</Title>;
}
