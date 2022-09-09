import Navbar from "../components/navbar/Navbar";
import AboutBox from "../components/about/AboutBox";
import SkillList from "../components/skills/SkillList";
import ProjectList from "../components/projects/ProjectList";
import Head from "next/head";
import { useRef } from "react";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const project = await client.getEntries({ content_type: "projects" });
  const skill = await client.getEntries({ content_type: "skills" });
  const about = await client.getEntries({ content_type: "aboutText" });
  return {
    props: {
      projects: project.items,
      skills: skill.items,
      about: about.items,
    },
    revalidate: 1,
  };
}

export default function Home({ projects, skills, about }) {
  const aboutPage = useRef(null);
  const skillsPage = useRef(null);
  const projectsPage = useRef(null);

  const handleClick = (e) => {
    if (e === "about") {
      aboutPage.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (e === "skills") {
      skillsPage.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (e === "projects") {
      projectsPage.current?.scrollIntoView({ behavior: "smooth" });
    }

    console.log("clicked " + e);
  };

  return (
    <>
      <Head>
        <title>Giunauth Naraine</title>
      </Head>
      <div className="grid-container">
        <div className="nav">
          <Navbar onClick={(e) => handleClick(e.target.value)} />
        </div>
        <div ref={aboutPage} className="about">
          <AboutBox about={about} />
        </div>

        <div className="content">
          <div ref={skillsPage} className="skills">
            <SkillList skills={skills} />
          </div>
          <div ref={projectsPage} className="projects">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
