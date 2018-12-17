import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
        <img src={require("./head.jpeg")} width={250} height={250} />
          <p>
          Hi! I'm Jonathan Cai.
          </p>
          <p>
          I'm an undergraduate student at Rice University in Houston, Texas. 
          I'm currently in my second year, pursuing a B.S. in Computer Science.
          </p>
          <b>Interests</b>
          <p>
          I enjoy problem-solving, and building things that I can call my own.
          My professional interests revolve around problems that I see in our society 
          - areas include education, mass media, partisanship, and freedom of speech.
          Right now, I'm interested a career in the tech industry as a Software Engineer.
          </p>
          <p>
          Outside of school and work, I like to play/watch/coach basketball, learn more about personal fitness, 
          discovering new music, and challenging myself to pick up new things like cooking.
          </p>
          <b>Work</b>
          <p>
          I've previously worked at a small company in Cupertino, <a href="https://www.sihuatech.com/">Sihua Technologies</a> as
          a Software Engineering Intern. 
          Their <a href="http://miaoyun.io/">Miaoyun</a> team is building a cloud-based platform for container orchestration.
          I primarily focused on DevOps, improving their CI pipeline.
          </p>

          <b>Projects</b>
          <ul>
            <li>
              Rice Delivery (Current) - As a part of <a href="https://www.sihuatech.com/">RiceApps</a>, I am working on building an on-campus food delivery platform.
            </li>
            <br></br>
            <li>SER Jobs (October 2018)</li>
            <br></br>
            <li>Capital One Engineering Summit Challenge (November 2018)</li>
            <br></br>
            <li>News Visualization (July 2018)</li>
            <br></br>
            <li>RiceSlang (March 2018)</li>
          </ul>

          <p>
            More about me: &nbsp;
            <a href="https://www.linkedin.com/in/jonathan-cai/">LinkedIn</a> &nbsp;
            <a href="https://github.com/jonathancai11">Github</a> &nbsp;
            <a href="resume.pdf" target="Jonathan Cai Resume">Resume</a>
          </p>
          <p>
          Feel free to reach out: caimjonathan@gmail.com
          </p>

          <footer>
            Latest update: 12/07/2018
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
