const AboutBox = ({ about }) => {
  return (
    <>
      <div className="container">
        {/* <IntroBanner></IntroBanner> */}
        {about.map((abt) => (
          <div className="bio" key={abt.sys.id}>
            <div>
              <div className="intro">{abt.fields.intro}</div>
              <div className="mainText">{abt.fields.mainText}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          border-radius: 6px;
          min-height: 100vh;
        }

        .bio {
          position: absolute;
          top: 40%;
          margin: 0 auto;
          padding-left: 150px;
          @media (max-width: 760px) {
            padding-left: 50px;
          }
        }

        .intro {
          color: #f05454;
          font-size: 4em;
          font-weight: 500;
        }

        .mainText {
          color: #f5f5f5;
          font-size: 1.5em;
          font-weight: 300;
          line-height: 1.6;
          max-width: 800px;
          min-height: 600px;
        }
      `}</style>
    </>
  );
};

export default AboutBox;
