import ProjectCard from "./ProjectCard";
const ProjectList = ({ projects }) => {
  return (
    <>
      <div className="container">
        <div className="title">Things I’ve Built</div>

        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 1400px;
          border-radius: 8px;
          flex-grow: 1;
          margin: 1rem auto;
          position: relative;
          padding: 0.5rem;
          margin-bottom: 200px;
        }

        .title {
          font-size: 2rem;
          color: #f05454;
          padding: 2rem;
        }
      `}</style>
    </>
  );
};

export default ProjectList;
