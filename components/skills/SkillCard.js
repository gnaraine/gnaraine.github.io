export default function SkillCard({ skill }) {
  const { title, description, skillsList } = skill.fields;
  return (
    <>
      <div className="column">
        {/* <Title>{title}</Title> */}

        <div className="list">
          {skillsList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
        {/* <div  className="description">{description}</div> */}
      </div>
      <style jsx>{`
        .column {
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
        }

        .list {
          text-decoration: none;
          list-style: none;
          padding: 2rem;
          font-size: 2em;
          color: #30475e;
        }
        .title {
          font-size: 2rem;
          color: #f05454;
          padding: 2rem;
        }

        .description {
          width: 300px;
          height: 300px;
          font-size: 1rem;
          padding: 2rem;
        }
      `}</style>
    </>
  );
}
