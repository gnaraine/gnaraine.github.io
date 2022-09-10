import SkillCard from "./SkillCard";

const SkillList = ({ skills }) => {
  return (
    <>
      <div className="container">
        <div className="title">Technologies I Work With </div>
        {skills.map((skill) => (
          <SkillCard key={skill.sys.id} skill={skill} />
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 1400px;
          /* display: flex; */
          margin: 1rem auto;
          align-items: center;
          border-radius: 8px;
          margin: 50px 0;
          padding: 50px 0px;
        }

        .title {
          margin-bottom: 50px;
          font-size: 2rem;
          color: #f05454;
          padding: 2rem;
        }
      `}</style>
    </>
  );
};

export default SkillList;
