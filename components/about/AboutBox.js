import styles from "../../styles/about/About.module.css";

const AboutBox = ({ about }) => {
  return (
    <>
      <div className={styles.container}>
        {/* <IntroBanner></IntroBanner> */}
        {about.map((abt) => (
          <div className={styles.bio} key={abt.sys.id}>
            <div>
              <div className={styles.intro}>{abt.fields.intro}</div>
              <div className={styles.mainText}>{abt.fields.mainText}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutBox;
