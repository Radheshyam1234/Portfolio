import "./Projects.css";
import FrontKartImg from "../images/frontkart-product-page.png";
import FrontUiImg from "../images/Front-Ui.JPG";
import FrontTubeImg from "../images/front-tube-homepage.png";
import FrontConnectImg from "../images/front-connect-homepage.png";
import FrontQuizImg from "../images/front-quiz-homepage (2).png";

const projects = [
  {
    name: "Front-UI",
    src: FrontUiImg,
    code: "https://github.com/Radheshyam1234/Front-U-I",
    live: "https://front-ui.netlify.app/",
  },
  {
    name: "Front-Kart",
    src: FrontKartImg,
    code: "https://github.com/Radheshyam1234/Front-Kart",
    live: "https://frontkart.netlify.app/",
  },
  {
    name: "Front-Connect",
    src: FrontConnectImg,
    code: "https://github.com/Radheshyam1234/Front-Connect",
    live: "https://front-connect.netlify.app/",
  },
  {
    name: "Front-Tube",
    src: FrontTubeImg,
    code: "https://github.com/Radheshyam1234/Front-Tube",
    live: "https://front-tube.netlify.app/",
  },
  {
    name: "Front-Quiz",
    src: FrontQuizImg,
    code: "https://github.com/Radheshyam1234/Front-Quiz-Test",
    live: "https://front-quiz-test.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <>
      <center style={{ marginBottom: "10px" }}>
        <h1 style={{ color: "purple" }}>Projects</h1>
      </center>

      <div className="projects-container" id="projects">
        {projects.map((project, index) => {
          return (
            <div className="project-card">
              <h2 style={{ textAlign: "center", margin: "10px 0" }}>
                {index + 1} . {project.name}
              </h2>
              <img src={project.src} alt={project.name} />
              <div className="btn-container">
                <a href={project.code}>
                  <button className="outline-btn">Source Code</button>
                </a>
                <a href={project.live}>
                  {" "}
                  <button className="solid-btn">See Live</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
