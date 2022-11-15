import styles from "../../styles/skills/SkillCard.module.css";
export default function SkillCard({ skill }) {
  const { title, description, skillsList } = skill.fields;
  return (
    <>
      <div className={styles.column}>
        {/* <Title>{title}</Title> */}

        <div className={styles.list}>
          {skillsList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
        {/* <div  className={styles.description}>{description}</div> */}
      </div>
    </>
  );
}
