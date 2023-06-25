import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import Header from "../Header";

import { FaLongArrowAltRight } from "react-icons/fa";

import {
  HeroSection,
  InfoContainer,
  MainContainer,
  PersonName,
  RoleType,
  RoleNote,
  MeAnchorLink,
} from "./styledComponents";

function Home() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <>
      <Header />
      {/* Main */}
      <MainContainer isDarkMode={isDarkMode}>
        {/* Hero Section */}
        <HeroSection id="hero">
          <InfoContainer isDarkMode={isDarkMode}>
            <PersonName>Hi, I'm Durga Potnuru👋</PersonName>
            <RoleType>Full Stack Developer</RoleType>
            <RoleNote>
              Experienced in building functional web applications and designing
              accessible digital products.
            </RoleNote>
            <MeAnchorLink href="#about">
              See Why You should Work With Me <FaLongArrowAltRight />
            </MeAnchorLink>
          </InfoContainer>
        </HeroSection>
      </MainContainer>
    </>
  );
}

export default Home;
