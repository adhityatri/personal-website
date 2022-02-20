import React from 'react'
import Title from './Heading';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const ListWrapper = styled.ul`
    list-style : none;
    padding: 0;
`

const Year = styled.h3`
    margin-top: ${props => props.theme.space};
    margin-bottom : 0;
`

const Desc = styled.span`

`

export default function Bio() {
    return <Wrapper>
        <Title>Biography</Title>
        <ListWrapper>
            <li>
                <Year>1991</Year>
                <Desc>Born in Jember, Indonesia</Desc>
            </li>
            <li>
                <Year>2013</Year>
                <Desc>Complete bachelor's degree in the Sekolah Tinggi Informatika dan Komputer Indonesia ( STIKI Malang )</Desc>
            </li>
            <li>
                <Year>2013</Year>
                <Desc>Work at Infoglobal as a Java Programmer</Desc>
            </li>
            <li>
                <Year>2015 to Present</Year>
                <Desc>Work at Infoglobal as a Frontend Developer</Desc>
            </li>
        </ListWrapper>
    </Wrapper>
}