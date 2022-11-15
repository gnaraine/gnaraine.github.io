import ProjectCard from "./ProjectCard";
import styles from "../../styles/projects/ProjectList.module.css";
const ProjectList = ({ projects }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Things I’ve Built</div>

        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
