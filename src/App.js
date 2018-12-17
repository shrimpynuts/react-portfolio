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
          Their <a href="http://miaoyun.io/">Miaoyun</a> team is building a platform for container orchestration.
          I primarily focused on DevOps, improving their CI pipeline.
          </p>

          <b>Projects</b>
          <ul>
            <li>
              Rice Delivery (Current) - 
              As a part of <a href="https://www.sihuatech.com/">RiceApps</a>, I am building an on-campus food delivery platform for several Rice SRB's.
            </li>
            <br></br>
            <li>SER Jobs (October 2018) - 
              At JP Morgan Chase's Code for Good Event in Plano, I worked to revamp SER Houston's digital application process.
            </li>
            <br></br>
            <li> <a href="https://capital-one-bikes-jonathancai.herokuapp.com/">LA Bike Share Data Analysis</a> (November 2018) -
              My project analyzing LA bike-share data (<a href="https://www.mindsumo.com/contests/bikeshare-data">Mindsumo challenge</a>) was selected as a winning submission to attend the Capital One Engineering Summit.
            </li>
            <br></br>
            <li><a href="http://news-visualize.herokuapp.com/">News Visualization</a> (July 2018) - 
              Built a network of political figures mentioned in the latest news articles (CNN, New York Times, Fox News).&nbsp;
              <a href="https://developer.att.com/blog/2018-entertainment-hackathon-winners-santa-clara">Placed third in the AT&T Entertainment hackathon</a>.
            </li>
            <br></br>
            <li>
              <a href="https://chrome.google.com/webstore/detail/length-converter/gnmcakofhhbmljpocbklhdboifijfdmk/reviews?hl=en&">Length Converter</a> and&nbsp;
              <a href="https://chrome.google.com/webstore/detail/hangman/dgicdiobkdfpalmbbdcmmjhmnpaicnkh?hl=en&">Hangman</a> (June 2018) -
              Two chrome extensions that do exactly what it sounds like they would do. Boasts 30+ users total!
            </li>
            <br></br>
            <li><a href="https://devpost.com/software/riceslang">RiceSlang</a> (March 2018) -
              Build a slackbot to help incoming students understand popular Rice slang terms.
            </li>
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
            <i>Last updated 12/07/2018.</i>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
