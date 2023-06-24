import { styled } from "styled-components";

export const MainContainer = styled.main`
  background-color: ${(props) => (props.isDarkMode ? "#0a0a1f" : "#f0f0f0")};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 90%, 0 100%);
  background-size: 55px 55px;
  height: 100vh;
  overflow-x: hidden;
`;
export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 220px 80px 0px;
`;

export const InfoContainer = styled.div`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
`;

export const PersonName = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 1.3rem;
  margin-bottom: 5px;

  line-height: 23.04px;
`;

export const RoleType = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
  font-size: 56px;
  font-family: Jost;
  font-weight: bolder;
  line-height: 67.2px;
`;

export const RoleNote = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  margin: 0px;
  margin-bottom: 14px;
  width: 60%;
`;

export const MeAnchorLink = styled.a`
  display: flex;
  align-items: center;
  color: #0ab635 !important;
  font-size: 15.6px;
  font-family: "Roboto Mono", monospace;
  font-weight: 900;
  line-height: 16.32px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
