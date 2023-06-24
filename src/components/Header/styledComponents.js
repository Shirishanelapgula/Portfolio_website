import styled from "styled-components";

export const WebsiteHeader = styled.header`
  background-color: ${(props) => (props.isDarkMode ? "#010116" : "#f1f1f1")};
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 99;
`;

export const Nav = styled.nav`
  box-shadow: 2px 2px 2px rgba(105, 105, 105, 0.3),
    2px 2px 2px rgba(105, 105, 105, 0.3);
  font-family: "Jost", sans-serif;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 80px;
  width: 100%;
  height: 70px;
  font-weight: bold;

  transition: all 0.3s ease-in;
`;

export const LogoContainer = styled.div``;

export const LogoImage = styled.img`
  height: 33px;
  width: 33px;
`;

export const NavLinksContainer = styled.ul`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333333")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  list-style-type: disc;
`;

export const NavLink = styled.li`
  list-style: none;
  letter-spacing: 1.5px;
  margin: 0 20px;
  border: none;

  font-family: "jost" sans-serif solid;
  font-size: 15.2px;
  font-weight: 900;
  text-decoration: none;
`;

export const ResumeBtn = styled.button`
  background-color: ${(props) =>
    props.isDarkMode ? "transparent" : "#f1f1f1"};
  border: 1px solid #47b147;
  border-radius: 10px;
  color: #0ab635;
  cursor: pointer;
  outline: none;
  font-size: 15.2px;
  font-weight: bold;
  font-family: Arial;
  padding: 10px 20px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #00d46a;
    color: #f6f6f6;
    transition: 0.9s;
  }
`;

export const DarkModeBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin: 0px;
  margin-left: 10px;
  font-size: 33px;
  padding: 0px;
  border: none;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333333")};
  transition: 0.9s;
`;
