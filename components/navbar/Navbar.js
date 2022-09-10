export default function Navbar({ onClick }) {
  return (
    <>
      <div className="container">
        <div className="nav">
          <a className="logo">
            <img src="/logo.png" alt="logo" width={100} height={100} />
          </a>

          <div className="navMenu">
            {/* <button href="#" onClick={onClick} value={"about"}>
              About
            </button> */}
            <button href="#" onClick={onClick} value={"skills"}>
              Skills
            </button>
            <button href="#" onClick={onClick} value={"projects"}>
              Projects
            </button>
            {/* <button href="#" onClick={onClick} value={"contact"}>
              Contact
            </button> */}
            {/* <button href="#" onClick={onClick} value={"resume"}>
              Resume
            </button> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 100px;
          border-bottom: #f05454 solid 2px;
        }

        .nav {
          margin: 0 auto;
          max-width: 1400px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0px 60px;
        }

        .navMenu {
          padding: 20px 0px;
          align-items: center;
          justify-self: end;
        }

        button {
          border: none;
          background: none;
          margin: 1px;
          font-size: 1.2em;
          font-weight: 100;
          color: #f5f5f5;
          padding: 10px;

          display: inline-block;
          position: relative;
          cursor: pointer;
        }

        button:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #f5f5f5;
          /* transform-origin: bottom right; */
          transition: transform 0.25s ease-out;
        }

        button:hover:after {
          background-color: #f05454;
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        @media (max-width: 700px) {
          .logo {
            display: none;
          }

          .nav {
          }

          .navMenu {
          }
        }
      `}</style>
    </>
  );
}
