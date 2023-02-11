import styles from "../../styles/navbar/Navbar.module.css";
export default function Navbar({ onClick }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <a className={styles.logo} href="https://github.com/gnaraine">
            <img src="/logo.png" alt="logo" width={100} height={100} />
          </a>

          <div className={styles.navMenu}>
            {/* <button href="#" onClick={onClick} value={"about"}>
              About
            </button>
            <button href="#" onClick={onClick} value={"skills"}>
              Skills
            </button>
            <button href="#" onClick={onClick} value={"projects"}>
              Projects
            </button>
            <button href="#" onClick={onClick} value={"contact"}>
              Contact
            </button>
            <button href="#" onClick={onClick} value={"resume"}>
              Resume
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
