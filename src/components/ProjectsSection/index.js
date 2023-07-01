import {
  ProjectsSectionContainer,
  ProjectContainer,
  TextContainer,
  TextHeading,
  TextSubNote,
  FilterContainer,
  FilterButton,
} from "./styledComponents";

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
        </ProjectContainer>
      </ProjectContainer>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
