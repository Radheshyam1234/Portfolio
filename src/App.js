import DancingLines from "react-dancing-lines";
import HtmlIcon from "./images/html-icon.png";
import CssIcon from "./images/css-icon.png";
import JsIcon from "./images/javascript-programming-language-icon.png";
import MongoIcon from "./images/mongodb-icon.png";
import ReduxIcon from "./images/redux-icon.png";
import ReactIcon from "./images/react-js-icon.png";
import ExpressIcon from "./images/express-js-icon.png";
import TsIcon from "./images/typescript-icon.png";
import GitIcon from "./images/git-icon.png";
import { Navbar } from "./Navbar/Navbar";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import "./App.css";
import { Blogs } from "./Blogs/Blogs";

export default function App() {
  return (
    <div>
      <DancingLines></DancingLines>
      <Navbar />
      <div className="container">
        <span className="ball a">
          <img src={HtmlIcon} alt="" />
        </span>
        <span className="ball b">
          <img src={CssIcon} alt="" />
        </span>
        <span className="ball c">
          <img src={JsIcon} alt="" />
        </span>
        <span className="ball d">
          <img src={ReactIcon} alt="" />
        </span>
        <span className="ball e">
          <img src={MongoIcon} alt="" />
        </span>
        <span className="ball f">
          <img src={ReduxIcon} alt="" />
        </span>
        <span className="ball g">
          <img src={ExpressIcon} alt="" />
        </span>
        <span className="ball h">
          {" "}
          <img src={TsIcon} alt="" />
        </span>
        <span className="ball i">
          {" "}
          <img src={GitIcon} alt="" />
        </span>
        {/* <span className="ball j"></span>
        <span className="ball k"></span> */}
      </div>

      <a href="https://drive.google.com/file/d/1TqUbMCKimM0M9tmpSWi4gWAcXOvZ3ES6/view?usp=sharing">
        <button className="resume-download-btn">Download Resume</button>
      </a>

      <div className="intro-section">
        Hi, myself Radheshyam. I am a{" "} recent college graduate (2019-2023) from  <b>NIT Jalandhar</b>. I am skilled as a {" "}
        <b>Frontend-Fullstack (MERN) developer</b> and currently working as an SDE Intern <b>@Preplaced<br/> .
      </div>

      <div
        id="retainable-rss-embed"
        data-rss="https://medium.com/feed/@radheshyamnitj,
                "
        data-maxcols="3"
        data-layout="grid"
        data-poststyle="inline"
        data-readmore="Read the rest"
        data-buttonclass="btn btn-primary"
        data-offset="-100"
      ></div>

      <Skills />
      <Projects />

      <Blogs />
    </div>
  );
}
