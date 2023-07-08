import { MdEmail } from "react-icons/md";
import { TfiTwitterAlt } from "react-icons/tfi";
import { useContext } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

import themeContext from "../../themeContext/themeContext";

import {
  FooterContainer,
  Email,
  FooterSocials,
  CopyRight,
} from "./styledComponents";

function Footer() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <Email>
        <MdEmail
          style={{
            fontSize: "1.1rem",
            fontWeight: "bolder",
            marginRight: "5px",
          }}
        />
        <a href="mailto:durgapotnuru07@gmail.com">durgapotnuru07@gmail.com</a>
      </Email>
      <FooterSocials>
        <a
          href="https://twitter.com/VijayPotnuru005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiTwitterAlt
            color="#1d9bf0"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          href="https://github.com/vijaypotnuru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/durga-potnuru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            color="#0366c3"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          href="https://hashnode.com/@vijaypotnuru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHashnode
            color="#2962ff"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
      </FooterSocials>
      <CopyRight>
        Copyright 2023 ©{" "}
        <a
          href="https://bio.link/durga_potnuru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Durga Potnuru
        </a>{" "}
        - All Right Reserved.
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;
