import styled from "styled-components";
import SkillCard from "./SkillCard";

const Container = styled.div`
  max-width: 1400px;
  /* display: flex; */
  margin: 1rem auto;
  align-items: center;
  border-radius: 8px;
  margin: 50px 0;
  padding: 50px 0px;
`;
const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 2rem;
  color: #f05454;
  padding: 2rem;
`;

const SkillList = ({ skills }) => {
  return (
    <Container>
      <Title>Technologies I Work With </Title>
      {skills.map((skill) => (
        <SkillCard key={skill.sys.id} skill={skill} />
      ))}
      <style jsx>{``}</style>
    </Container>
  );
};

export default SkillList;
