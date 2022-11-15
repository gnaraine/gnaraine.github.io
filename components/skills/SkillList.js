import SkillCard from "./SkillCard";
import styles from "../../styles/skills/SkillList.module.css";
const SkillList = ({ skills }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Technologies I Work With </div>
        {skills.map((skill) => (
          <SkillCard key={skill.sys.id} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default SkillList;
