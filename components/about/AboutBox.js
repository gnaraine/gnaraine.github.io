import styled from "styled-components";
const Container = styled.div`
  border-radius: 6px;
  min-height: 100vh;
`;

const IntroBanner = styled.div``;

const Bio = styled.div`
  position: absolute;
  top: 40%;
  margin: 0 auto;
  padding-left: 150px;
  @media (max-width: 760px) {
    padding-left: 50px;
  }
`;

const Intro = styled.h1`
  color: #f05454;
  font-size: 4em;
  font-weight: 500;
`;

const MainText = styled.h2`
  color: #f5f5f5;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.6;
  max-width: 800px;
  min-height: 600px;
`;
const AboutBox = ({ about }) => {
  return (
    <Container>
      {/* <IntroBanner></IntroBanner> */}
      {about.map((abt) => (
        <Bio key={abt.sys.id}>
          <div>
            <Intro>{abt.fields.intro}</Intro>
            <MainText>{abt.fields.mainText}</MainText>
          </div>
        </Bio>
      ))}
    </Container>
  );
};

export default AboutBox;
