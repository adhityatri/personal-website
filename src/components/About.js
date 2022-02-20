import React from 'react';
import styled from 'styled-components';
import Title from './Heading';
import Bio from './Bio';

const Wrapper = styled.div`
    margin-top : 48px;
`;

const Paragraph = styled.p`
    text-align: justify;
    text-indent: ${props => props.theme.fonts.indent};
`


export default function About() {
    return <Wrapper>
        <Title>About</Title>
        <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>

        <Bio />
    </Wrapper>;
}
