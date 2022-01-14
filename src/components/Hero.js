import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HeroWrapper = styled.div`
  border: 2px solid white;
  height: 200px;
  border-radius: ${(props) => props.theme.space};
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  overflow: hidden;
`;

const GreethingTitle = styled.h1`
  margin: 0;
`;
const GreethingDescription = styled.p`
  margin: 0;
`;

const Greething = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: ${(props) => props.theme.space};
  flex: 1;
  color: ${(props) => props.theme.colors.text};
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 5%;
  bottom: 0;
  right: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    right: 5%;
  }
  border-top-left-radius: 50px;
  opacity: 0.9;
`;

function Hero() {
  return (
    <HeroWrapper>
      <Greething>
        <>
          <GreethingTitle>Hello,</GreethingTitle>
          <GreethingDescription>
            I'm a frontend developer based in Indonesia!
          </GreethingDescription>
        </>

        <ImageWrapper>
          <StaticImage
            src="../images/me.png"
            alt="A dinosaur"
            placeholder="blurred"
            height={250}
            width={200}
          />
        </ImageWrapper>
      </Greething>
    </HeroWrapper>
  );
}

export default Hero;
