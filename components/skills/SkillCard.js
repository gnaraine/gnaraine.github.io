import styled from "styled-components";

const Column = styled.div`
  /* display: block; */
  /* width: auto; */
  /* text-align: center; */
  font-weight: 300;
  line-height: 1.6;
  /* padding: 2rem; */
  /* height: 800px; */
  align-items: center;
  margin: 0 auto;
  width: 500px;
  @media (max-width: 760px) {
    text-align: center;
  }
`;

const List = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 2rem;
  font-size: 2em;
  color: #30475e;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #f05454;
  padding: 2rem;
`;

const Description = styled.p`
  width: 300px;
  height: 300px;
  font-size: 1rem;
  padding: 2rem;
`;

export default function SkillCard({ skill }) {
  const { title, description, skillsList } = skill.fields;
  return (
    <>
      <Column>
        {/* <Title>{title}</Title> */}

        <List>
          {skillsList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
        {/* <Description>{description}</Description> */}
      </Column>
    </>
  );
}
