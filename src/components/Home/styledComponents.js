import { styled } from "styled-components";



export const MainContainer = styled.main`
  background-color: ${(props) => (props.isDarkMode ? "#0a0a1f" : "#f0f0f0")};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 90%, 0 100%);
  background-size: 55px 55px;
  height: 100vh;
  overflow-x: hidden;

  @media (max-width: 908px) {
    height: auto !important;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 220px 80px 0px;

  @media (max-width: 908px) {
    padding: 220px 50px 0px !important;
  }
  @media (max-width: 700px) {
    padding: 140px 40px 70px !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    padding: 140px 30px 80px !important;
  }
  @media (max-width: 349px) {
    padding: 70px 25px 50px !important;
  }
  /* &::after {
    content: "";

    position: absolute;
    top: 0;
    right: -450px;
    bottom: -60px;
    background-image: url("https://res.cloudinary.com/dmlhm8dwi/image/upload/v1687674267/pattern_kilf9b.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    width: 85%;
    height: 100%;
  } */
`;

export const InfoContainer = styled.div`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  transition: all 0.3s ease-in-out;
  @media (max-width: 908px) {
    margin-bottom: 150px !important;
  }
  @media (max-width: 700px) {
    margin-bottom: 50px !important;
    margin-top: 80px !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    margin-top: 60px !important;
  }
`;

export const PersonName = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 1.3rem;
  margin-bottom: 5px;
  line-height: 23.04px;
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 1rem !important;
  }
  @media (max-width: 349px) {
    font-size: 0.8rem !important;
  }
`;

export const RoleType = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
  font-size: 56px;
  font-family: Jost;
  font-weight: bolder;

  @media (max-width: 700px) {
    font-size: 3rem !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 2.8rem !important;
  }
  @media (max-width: 349px) {
    font-size: 2rem !important;
  }
`;

export const RoleNote = styled.p`
  line-height: 1.5;
  font-family: "Roboto Mono", monospace;
  margin: 0px;
  margin-bottom: 14px;
  width: 60%;
  @media (max-width: 700px) {
    width: 100% !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    width: 100% !important;
  }
  @media (max-width: 349px) {
    font-size: 0.75rem !important;
  }
`;

export const MeAnchorLink = styled.a`
  display: flex;
  align-items: center;
  color: #00d46a !important;
  font-family: "Roboto Mono", monospace;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 0.7rem !important;
  }
  @media (max-width: 349px) {
    font-size: 0.6rem !important;
  }
  &:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 5px 15px #0ab635;
  }
`;
