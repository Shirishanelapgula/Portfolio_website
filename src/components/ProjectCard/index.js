import { FaLink, FaGithub } from "react-icons/fa";

import {
  ProjectCardContainer,
  ProjectDetails,
  ProjectText,
  Stack,
  ProjectLinks,
} from "./styledComponents";

function ProjectCard(props) {
  const { projectDeatils } = props;
  const { title, category, description, tags, links, backgroundImage } =
    projectDeatils;
  console.log(title);
  return (
    <ProjectCardContainer backgroundImage={backgroundImage}>
      <ProjectDetails>
        <ProjectText>
          <h3>{title}</h3>
          <p>{description}</p>
          <Stack>{tags[0]}</Stack>
        </ProjectText>
        <ProjectLinks>
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            <FaLink />
          </a>
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </ProjectLinks>
      </ProjectDetails>
    </ProjectCardContainer>
  );
}

export default ProjectCard;
