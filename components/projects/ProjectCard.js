import styled from "styled-components";

const Project = styled.div`
  //border: blue solid 1px;
  //width: 95%;
  max-width: 1000px;
  margin: 50px auto;
  align-items: center;
  display: flex;
  @media (max-width: 760px) {
    border-top: #f5f5f5 solid 2px;
    padding: 50px 20px;
    display: block;
    text-align: center;
  }
`;

const Description = styled.div`
  //border: pink solid 1px;
  z-index: 999;
  max-width: 400px;
  background-color: #30475e;
  display: flex;
  padding: 30px;
  border-radius: 8px;
  color: white;
  margin-left: -250px;
  border: 3px solid #f05454;
  @media (max-width: 760px) {
    margin: 0;
    max-width: 100%;
  }
`;

export default function ProjectCard({ project }) {
  const { title, description, image, linkTo } = project.fields;
  return (
    <>
      <Project>
        <div className="image">
          <a
            className="image-wrapper"
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={"https:" + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
            />
          </a>
        </div>
        <Description>
          <div>
            <h1>
              <a href={linkTo} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h1>
            <p>{description}</p>
          </div>
        </Description>
      </Project>
      <style jsx>{`
        .image {
          max-width: 1000px;
          height: auto;
          padding: 5px;
          border-radius: 10px;
        }
        .image:hover {
          background: linear-gradient(
            to bottom,
            #f05454,
            #ca4a7e,
            #8d508e,
            #515180,
            #30475e
          );
        }

        a {
          text-decoration: none;
          color: inherit;
        }
        img {
          border-radius: 10px;
          max-width: 700px;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
