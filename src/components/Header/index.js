import { useState, useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose, VscGithubInverted } from "react-icons/vsc";

import { PiDevToLogoDuotone, PiDevToLogoBold } from "react-icons/pi";

import {
  WebsiteHeader,
  Nav,
  LogoContainer,
  NavLinksContainer,
  ResumeBtn,
  NavLink,
  DarkModeBtn,
  HamburgerMenu,
  Bar,
} from "./styledComponents";

function Header() {
  const { isDarkMode, onToggleDarkMode } = useContext(themeContext);

  const [isMenuActive, setToggleMenu] = useState(false);

  const onToggleMenuActive = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <WebsiteHeader isDarkMode={isDarkMode}>
      <Nav>
        <LogoContainer>
          <a href="#hero" aria-label="logo ">
            {isDarkMode ? (
              <PiDevToLogoDuotone
                style={{ color: "white", fontSize: "55px" }}
              />
            ) : (
              <PiDevToLogoBold style={{ color: "#333F", fontSize: "55px" }} />
            )}
          </a>
        </LogoContainer>
        <NavLinksContainer isDarkMode={isDarkMode} isMenuActive={isMenuActive}>
          <NavLink>
            <a href="#about">ABOUT</a>
          </NavLink>
          <NavLink>
            <a href="#projects">PROJECTS</a>
          </NavLink>
          <NavLink>
            <a href="https://medium.com/@shirishanelapogula/embarking-on-a-journey-unveiling-the-tech-odyssey-3ba897b8440d" target="_blank" rel="noopener noreferrer">BLOG</a>
          </NavLink>
          <NavLink>
              <a href="https://drive.google.com/file/d/1_u6Vhq4oB_RVdszjz2Q9oep8d1Twtnw5/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
          </NavLink>
          <NavLink>
              <a href="https://www.hackerrank.com/profile/shirishanelapog1" target="_blank" rel="noopener noreferrer">HACKER RANK PROFILE</a>
          </NavLink>
          <NavLink>
            <a href="#contact">CONTACT</a>
          </NavLink>
          <NavLink>
            <ResumeBtn type="button" isDarkMode={isDarkMode}>
              <a
                href="https://github.com/Shirishanelapgula"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <VscGithubInverted
                  style={{
                    marginRight: "5px",
                  }}
                />{" "}
                GitHub
              </a>
            </ResumeBtn>
          </NavLink>
          {/* Dark Mode Switch */}
          <DarkModeBtn
            aria-label="darkMode"
            type="button"
            isDarkMode={isDarkMode}
            onClick={onToggleDarkMode}
          >
            {isDarkMode ? <ImSun /> : <FiMoon />}
          </DarkModeBtn>
        </NavLinksContainer>
        {/* Mobile Hamburger Menu */}

        <HamburgerMenu isDarkMode={isDarkMode} onClick={onToggleMenuActive}>
          {isMenuActive && (
            <Bar>
              <VscChromeClose />
            </Bar>
          )}
          {!isMenuActive && (
            <Bar>
              <RxHamburgerMenu />
            </Bar>
          )}
        </HamburgerMenu>
      </Nav>
    </WebsiteHeader>
  );
}

export default Header;
