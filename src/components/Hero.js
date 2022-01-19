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
  margin-top: 24px;
  margin-bottom: ${props => props.theme.space}
`;

const GreethingTitle = styled.span`
  margin: 0;
  line-height: 2rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${props => props.theme.space};
  font-family: ${props => props.theme.fonts.heading}
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

const ButtonPorto = styled.button`
  border: 0;
  margin-top: 6px;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${props => props.theme.colors.primary};
  font-size: 0.875em;
  color: white;
`;

function Hero() {
  return (
    <HeroWrapper>
      <Greething>
        <>
          <GreethingTitle>Hello,<br /> I am Adhitya Tri</GreethingTitle>
          <GreethingDescription>
            Adhitya is a frontend developer based in Indonesia!
          </GreethingDescription>
          <ButtonPorto>My Portofolio</ButtonPorto>
        </>

        <ImageWrapper>
          <StaticImage
            src="../images/me.png"
            alt="Me"
            placeholder="blurred"
            height={300}
          />
        </ImageWrapper>
      </Greething>
    </HeroWrapper>
  );
}

export default Hero;
