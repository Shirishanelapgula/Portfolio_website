import myProjectsList from "./myProjectsList";

import {
  ProjectsSectionContainer,
  ProjectContainer,
  TextContainer,
  TextHeading,
  TextSubNote,
  FilterContainer,
  FilterButton,
  Projects,
} from "./styledComponents";

import ProjectCard from "../ProjectCard";

function ProjectsSection() {
  return (
    <ProjectsSectionContainer id="projects">
      <ProjectContainer>
        <TextContainer>
          <TextHeading>Featured Projects</TextHeading>
          <TextSubNote>Some Projects I have worked on</TextSubNote>
        </TextContainer>
        <ProjectContainer>
          <FilterContainer>
            <FilterButton type="button">All</FilterButton>
            <FilterButton type="button">Design</FilterButton>
            <FilterButton type="button">Software</FilterButton>
            <FilterButton type="button">Blockchain</FilterButton>
          </FilterContainer>
          <Projects>
            {myProjectsList.map((project) => (
              <ProjectCard key={project.id} projectDeatils={project} />
            ))}
          </Projects>
        </ProjectContainer>
      </ProjectContainer>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
