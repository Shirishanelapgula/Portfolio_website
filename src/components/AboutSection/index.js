import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { FaBootstrap, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNpm } from "react-icons/si";

import {
  AboutSectionContainer,
  AboutContainer,
  Photowrapper,
  MyPhoto,
  Background,
  BackgroundTitle,
  BackgroundSubtile,
  Description,
  TechStackContainer,
  TechStackHeading,
  Tools,
  ToolList,
  ToolItem,
} from "./styledComponents";

function AboutSection() {
  const { isDarkMode } = useContext(themeContext);
  return (
    <AboutSectionContainer id="about">
      <AboutContainer>
        <Photowrapper>
          <MyPhoto
            alt="my photo"
            loading="lazy"
            src="https://res.cloudinary.com/dzdcjchdc/image/upload/v1705051133/IMG_20221204_2053463_uougus.jpg"
          />
        </Photowrapper>
        <Background isDarkMode={isDarkMode}>
          <BackgroundTitle>Background</BackgroundTitle>
          <BackgroundSubtile>A bit About Me</BackgroundSubtile>
          <Description>
          I am a results-oriented Full Stack Developer with a rich background, 
          amassing two years of hands-on experience in crafting robust and scalable web applications.
          My journey began as a Software Engineer at Mindgrep Technologies Pvt Ltd, 
          where I played a pivotal role in developing innovative solutions. 
          Following that, I contributed my skills and expertise as a Senior Associate at Wipro, 
          elevating my capabilities in creating seamless user experiences.
          </Description>
          <Description>
           Mindgrep Technologies Pvt Ltd (Software Engineer):
           In my tenure at Mindgrep, I actively contributed to the design and implementation of backend systems, 
           specializing in Python,Node JS for robust server-side applications. 
           My role involved collaborating with cross-functional teams, 
           ensuring the delivery of high-quality solutions within deadlines.
          </Description>
          <Description>
           Wipro (Senior Associate):
           As a Senior Associate at Wipro, 
           I took on a broader spectrum of responsibilities, 
           including frontend development using React.js, 
           and backend development with Node.js. 
           This experience enhanced my ability to architect and deploy end-to-end solutions, 
           meeting the diverse needs of clients and stakeholders.
          </Description>
          <Description>
           Led the successful development of a customer portal at Mindgrep, 
           optimizing user interactions and experiences.
           Implemented efficient RESTful APIs, contributing to a 25% improvement in application performance.
          </Description>
          <Description>
           During my apprenticeship at NxtWave, I honed my skills further, 
           exploring cutting-edge technologies and methodologies. 
           This experience allowed me to stay at the forefront of industry trends, 
           reinforcing my commitment to continuous learning.
          </Description>
          <Description>
           Eager to bring my comprehensive skill set to a dynamic team, 
           I am actively seeking opportunities that allow me to contribute to challenging projects, 
           apply my full stack expertise, and continue my professional growth.
          </Description>
        </Background>
      </AboutContainer>
      <TechStackContainer isDarkMode={isDarkMode}>
        <TechStackHeading>My core tools and technologies</TechStackHeading>
        <Tools>
          <ToolList>
            <ToolItem>
              <AiFillHtml5
                color="#ff4d15"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              HTML
            </ToolItem>
            <ToolItem>
              <DiCss3
                color="#264de4"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              CSS
            </ToolItem>
            <ToolItem>
              <FaBootstrap
                color="#7a09f7"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Bootstrap
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <RiJavascriptFill
                color="#f0db4f"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Javascript
            </ToolItem>
            <ToolItem>
              <DiReact
                color="#61dbfb"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              React.JS
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022486/Python-logo-notext.svg_uvzbbk.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Python Icon"
              />
              Python
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022770/sqlite_logo_icon_169724_ox8bsk.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="SQLite Icon"
              />
              SQLite
            </ToolItem>
            <ToolItem>
              <FaNodeJs
                color="#68a063"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Node.JS
            </ToolItem>
            <ToolItem>
              <SiExpress
                style={{
                  marginRight: "0.5rem",
                }}
              />{" "}
              Express.JS
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <SiNpm
                color="#cb3837"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              NPM
            </ToolItem>
            <ToolItem>
              <FaGitAlt
                color="#f05030"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Git
            </ToolItem>
            <ToolItem>
              <AiFillGithub
                style={{
                  marginRight: "0.5rem",
                }}
              />
              GitHub
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022067/pngwing.com_rte7ts.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Figma Icon"
              />
              Figma
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688023219/mongodb_original_logo_icon_146424_gfauqe.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="MongoDB Icon"
              />
              MongoDB
              <sup
                style={{
                  color: "#47b147",
                  fontSize: "0.54rem",
                  fontFamily: "Roboto, Mono monospace",
                  marginLeft: "0.2rem",
                }}
              >
                SOON!
              </sup>
            </ToolItem>
            <ToolItem>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="TypeScript Icon"
              />
              TypeScript
            </ToolItem>
          </ToolList>
          <ToolList>
          <ToolItem>
              <img
                src="https://res.cloudinary.com/dzdcjchdc/image/upload/v1705052816/Screenshot_from_2024-01-12_15-16-39_fxqeua.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="MochaChai  Icon"
              />
              Mocha and Chai
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dqfmzzr5g/image/upload/v1705053278/m6ct8rz4g2dsiggkpjto.png"
                style={{
                  width: "2rem",
                  marginRight: "0.5rem",
                }}
                alt="Postman Icon"
              />
              Postman
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dqfmzzr5g/image/upload/v1705053526/docusaurus_ideilc.svg"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Docusaurus Icon"
              />
              Docusaurus
            </ToolItem>
          </ToolList>
        </Tools>
      </TechStackContainer>
    </AboutSectionContainer>
  );
}

export default AboutSection;
