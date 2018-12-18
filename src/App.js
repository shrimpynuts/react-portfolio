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
            I've always enjoyed problem-solving, and leaving a positive impact (however small) on those around me.
            My professional interests revolve around problems I see in our society 
            - areas include education, mass media, partisanship, and freedom of speech.
            {/* but more generally, I'm interested in any opportunity that allows me to use my problem-solving, analytical, and communication skills to leave a positive impact. */}
          </p>
          <p>
            I originally entered Rice as a Political Science major, intending to pursue law school, and having never written a line of code before. 
            After a few intro CS courses, I saw not just how fun, but how uniquely impactful software could be 
            – programmers (of any age) can solve problems in such an immediate way. 
            I also came to realize how much I love building things I can call my own.
            So as of now, I'm interested a career in the tech industry as a software engineer. 
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
            I've previously worked at a small company in Cupertino, <a href="https://www.sihuatech.com/">Sihua Technologies</a>, as
            a Software Engineering Intern (June - August 2018). 
            Their <a href="http://miaoyun.io/">Miaoyun</a> team is building a platform for container orchestration.
            I primarily focused on DevOps, using a <a href="https://www.weave.works/blog/gitops-operations-by-pull-request">GitOps</a> workflow to
            improve their CI pipeline.
          </p>
          <p>
            I've also volunteered at a local library with <a href="https://coderdojo.com/">CoderDojo</a> to help teach young kids some programming.
          </p>
          <p>
            The rest of my experiences are varied - from <a href="https://khanna.house.gov/">a congressional campaign</a>, to <a href="https://www.sacattorneys.com/">my father's law firm</a>, to <a href="http://www.ufrate.com/en/">a small startup incubator</a>.
            You can find out more about these other experiences on <a href="https://www.linkedin.com/in/jonathan-cai/">my LinkedIn</a>.
          </p>

          <b>Projects</b>
          <ul>
            <li>
              Rice Delivery (Current) - 
              As a part of <a href="https://www.riceapps.org/">RiceApps</a>, I am building an on-campus food delivery platform for several Rice SRB's.
            </li>
            <br></br>
            <li>SER Jobs (October 2018) - 
              At JP Morgan Chase's Code for Good Event in Plano, I worked to revamp SER Houston's digital application process.
            </li>
            <br></br>
            <li> <a href="https://capital-one-bikes-jonathancai.herokuapp.com/">LA Bike-Share Data Analysis</a> (November 2018) -
              My project analyzing LA bike-share data (<a href="https://www.mindsumo.com/contests/bikeshare-data">Mindsumo challenge</a>) was selected as a winning submission to attend the Capital One Engineering Summit.
            </li>
            <br></br>
            <li><a href="http://news-visualize.herokuapp.com/">News Visualization</a> (July 2018) - 
              Illustrated a network of political figures mentioned in the latest news articles (CNN, New York Times, Fox News).&nbsp;
              <a href="https://developer.att.com/blog/2018-entertainment-hackathon-winners-santa-clara">Placed third in the AT&T Entertainment hackathon</a>.
            </li>
            <br></br>
            <li>
              <a href="https://chrome.google.com/webstore/detail/length-converter/gnmcakofhhbmljpocbklhdboifijfdmk/reviews?hl=en&">Length Converter</a> and&nbsp;
              <a href="https://chrome.google.com/webstore/detail/hangman/dgicdiobkdfpalmbbdcmmjhmnpaicnkh?hl=en&">Hangman</a> (June 2018) -
              Two chrome extensions that do exactly what it sounds like they would do. Boasts nearly 40 users!
            </li>
            <br></br>
            <li><a href="https://devpost.com/software/riceslang">RiceSlang</a> (March 2018) -
              Built a slackbot to help incoming students understand popular Rice slang terms. Submission to HackRice 7.5.
            </li>
          </ul>
          <p>
            More about me: &nbsp;
            <a href="https://www.linkedin.com/in/jonathan-cai/">LinkedIn</a> &nbsp;
            <a href="https://github.com/jonathancai11">Github</a> &nbsp;
            <a href={pdf} target="Jonathan Cai Resume">Resume</a>
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
