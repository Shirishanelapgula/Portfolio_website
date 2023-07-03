import { styled } from "styled-components";

export const ProjectsSectionContainer = styled.section`
  background-color: #f1f1f1;
  color: #333;
  position: relative;
  padding: 60px 0;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 600px) and (min-width: 350px) {
    padding: 30px 0 !important;
  }
`;

export const ProjectContainer = styled.div`
  margin-bottom: 20px;
  padding: 0 40px;
  @media (max-width: 908px) {
    margin-bottom: 30px !important;
    padding: 0 25px !important;
  }
  @media (max-width: 349px) {
    padding: 0 25px !important;
  }
`;

export const TextContainer = styled.div``;

export const TextHeading = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;

export const TextSubNote = styled.p`
  font-family: "Roboto Mono", monospace;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const FilterButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #333;
  margin: 0 8px;
  padding: 10px 14px;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
  &:hover {
    border: 1.5px solid #47b147;
  }
`;

export const Projects = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;
  padding: 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (max-width: 455px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
`;
