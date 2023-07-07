import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import Header from "../Header";
import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

import { FaArrowCircleRight } from "react-icons/fa";

import {
  AppContainer,
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
              See Why You should Work With Me{" "}
              <FaArrowCircleRight
                style={{
                  marginLeft: "7px",
                }}
              />
            </MeAnchorLink>
          </InfoContainer>
        </HeroSection>
      </MainContainer>
      {/* AboutSection */}
      <AboutSection />
      {/* ProjectsSection */}
      <ProjectsSection />
      {/* ContactSection */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
