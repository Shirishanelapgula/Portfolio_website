import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import {
  WebsiteHeader,
  Nav,
  LogoContainer,
  LogoImage,
  NavLinksContainer,
  ResumeBtn,
  NavLink,
  DarkModeBtn,
  DarkModeBtnLogo,
} from "./styledComponents";

function Header() {
  const { isDarkMode, onToggleDarkMode } = useContext(themeContext);

  return (
    <WebsiteHeader isDarkMode={isDarkMode}>
      <Nav>
        <LogoContainer>
          <a href="#hero">
            {isDarkMode ? (
              <LogoImage
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1687609753/logo-light_vkos8o.png"
                alt="Website Logo"
              />
            ) : (
              <LogoImage
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1687609776/logo_d8y4kq.png"
                alt="Website Logo"
              />
            )}
          </a>
        </LogoContainer>
        <NavLinksContainer isDarkMode={isDarkMode}>
          <NavLink>
            <a href="#about">ABOUT</a>
          </NavLink>
          <NavLink>
            <a href="#projects">PROJECTS</a>
          </NavLink>
          <NavLink>
            <a href="#blog">BLOG</a>
          </NavLink>
          <NavLink>
            <a href="#contact">CONTACT</a>
          </NavLink>
          <NavLink>
            <ResumeBtn type="button" isDarkMode={isDarkMode}>
              <a
                href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Durga_2023-06-23-231618.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </ResumeBtn>
          </NavLink>
          {/* Dark Mode Switch */}
          <DarkModeBtn
            type="button"
            isDarkMode={isDarkMode}
            onClick={onToggleDarkMode}
          >
            {isDarkMode ? <ImSun /> : <FiMoon />}
          </DarkModeBtn>
        </NavLinksContainer>
      </Nav>
    </WebsiteHeader>
  );
}

export default Header;
