import styles from "../../styles/projects/ProjectCard.module.css";
export default function ProjectCard({ project }) {
  const { title, description, image, linkTo, linkLive } = project.fields;
  return (
    <>
      <div className={styles.project}>
        <div className={styles.image}>
          <a href={linkTo} target="_blank" rel="noopener noreferrer">
            <img
              src={"https:" + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
            />
          </a>
        </div>
        <div className={styles.description}>
          <div>
            <h1>
              <a href={linkTo} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h1>
            <p>{description}</p>

            {console.log(linkLive)}
            <div className={styles.liveLink}>
              <p className={linkLive === undefined ? styles.hidden : ""}>
                <a href={linkLive}>Live Version</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
