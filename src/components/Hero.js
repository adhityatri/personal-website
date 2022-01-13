import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div`
    border: 2px solid white;
    height: 250px;
    border-radius: ${props => props.theme.space};
    background: ${props => props.theme.colors.primary};
`

function Hero() {
    return (
        <HeroWrapper>

        </HeroWrapper>
    )
}

export default Hero
