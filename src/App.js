import React, { Component } from 'react';
import './App.css';
import img from './files/head.jpeg'
import pdf from './files/Jonathan-Cai-Resume.pdf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
        <img src={img} width={250} height={250} />
          <p>
            Hi! I'm Jonathan Cai.
          </p>
          <p>
            I'm an undergraduate student at Rice University in Houston, Texas. 
            I'm currently in my second year, pursuing a B.S. in Computer Science.
          </p>
          <b>Interests</b>
          <p>
            I've always enjoyed problem-solving and leaving a positive impact (however small) on those around me.
            My professional interests revolve around problems I see in our society 
            - areas include education, mass media, partisanship, and freedom of speech.
            {/* but more generally, I'm interested in any opportunity that allows me to use my problem-solving, analytical, and communication skills to leave a positive impact. */}
          </p>
          <p>
            I originally entered Rice as a Political Science major, intending to pursue law school, 
            and having never written a line of code before. 
            But after a few intro CS courses, I saw not just how fun, but how uniquely impactful software can be 
            – engineers (of any age) can tackle problems in such an immediate way. 
            I also came to realize how much I love building things I can call my own.
            So as of now, I'm interested in a career in the tech industry as a software engineer. 
          </p>
          <p>
            Outside of school and work, I like to play/watch/coach basketball, learn more about personal fitness, 
            discovering new music, and challenging myself to pick up new things like cooking.
          </p>
          <b>Work</b>
          <p>
            I am an incoming Software Engineering Intern at JP Morgan Chase & Co. in Houston, Texas this Summer 2019 (June - August 2019).
          </p>
          <p>
            I've previously worked at a small company in Cupertino, <a href="https://www.sihuatech.com/" target="_blank">Sihua Technologies</a>, as
            a Software Engineering Intern (June - August 2018). 
            Their <a href="http://miaoyun.io/" target="_blank">Miaoyun</a> team is building a platform for container orchestration.
            I primarily focused on DevOps, using a <a href="https://www.weave.works/blog/gitops-operations-by-pull-request" target="_blank">GitOps</a> workflow to
            improve their CI pipeline.
          </p>
          <p>
            I've also volunteered at a local library with <a href="https://coderdojo.com/" target="_blank">CoderDojo</a> to help teach young kids some programming.
          </p>
          <p>
            The rest of my experiences are varied - from <a href="https://khanna.house.gov/" target="_blank">a congressional campaign</a>, 
            to <a href="https://www.sacattorneys.com/" target="_blank">my dad's law firm</a>, 
            to <a href="http://www.ufrate.com/en/" target="_blank">a small startup incubator</a>.
            You can find out more about these other experiences on <a href="https://www.linkedin.com/in/jonathan-cai/" target="_blank">my LinkedIn</a>.
          </p>

          <b>Projects</b>
          <ul>
            <li>
              Rice Delivery (Current) - 
              As a part of <a href="https://www.riceapps.org/" target="_blank">RiceApps</a>, I am building an on-campus food delivery platform for several Rice SRB's.
            </li>
            <br></br>
            <li>SER Jobs (October 2018) - 
              At JP Morgan Chase's Code for Good Event in Plano, I worked to revamp SER Houston's digital application process.
            </li>
            <br></br>
            <li> <a href="https://capital-one-bikes-jonathancai.herokuapp.com/" target="_blank">LA Bike-Share Data Analysis</a> (November 2018) -
              My project analyzing LA bike-share data (<a href="https://www.mindsumo.com/contests/bikeshare-data" target="_blank">Mindsumo challenge</a>) 
              was selected as a winning submission to attend the 2019 Capital One Engineering Summit.
            </li>
            <br></br>
            <li><a href="http://news-visualize.herokuapp.com/" target="_blank">News Visualization</a> (July 2018) - 
              Illustrated a network of political figures mentioned in the latest news articles (CNN, New York Times, Fox News).&nbsp;
              <a href="https://developer.att.com/blog/2018-entertainment-hackathon-winners-santa-clara" target="_blank">Placed third overall in the AT&T Entertainment hackathon</a>.
            </li>
            <br></br>
            <li>
              <a href="https://chrome.google.com/webstore/detail/length-converter/gnmcakofhhbmljpocbklhdboifijfdmk/reviews?hl=en&" target="_blank">Length Converter</a> and&nbsp;
              <a href="https://chrome.google.com/webstore/detail/hangman/dgicdiobkdfpalmbbdcmmjhmnpaicnkh?hl=en&" target="_blank">Hangman</a> (June 2018) -
              Two chrome extensions that do exactly what it sounds like they would do. Boasts nearly a flopping 40 users!
            </li>
            <br></br>
            <li><a href="https://devpost.com/software/riceslang" target="_blank">RiceSlang</a> (March 2018) -
              Built a slackbot to help incoming students understand popular Rice slang terms. Submission to my first hackathon, HackRice 7.5.
            </li>
          </ul>

          <b>Contact</b>

          <p>
            More about me: &nbsp;
            <a href="https://www.linkedin.com/in/jonathan-cai/" target="_blank">LinkedIn</a> &nbsp;
            <a href="https://github.com/jonathancai11" target="_blank">Github</a> &nbsp;
            <a href={pdf} target="Jonathan Cai Resume" target="_blank">Resume</a>
          </p>
          <p>
          Feel free to reach out: caimjonathan@gmail.com
          </p>

          <footer>
            <i>Last updated 12/17/2018.</i>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
