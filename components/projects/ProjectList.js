import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  max-width: 1400px;
  border-radius: 8px;
  flex-grow: 1;
  margin: 1rem auto;
  position: relative;
  padding: 0.5rem;
  margin-bottom: 200px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #f05454;
  padding: 2rem;
`;

const ProjectList = ({ projects }) => {
  return (
    <Container>
      <Title>Things I’ve Built</Title>

      {projects.map((project) => (
        <ProjectCard key={project.sys.id} project={project} />
      ))}
    </Container>
  );
};

export default ProjectList;
