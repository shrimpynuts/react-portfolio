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
            I'm about to enter my third year, pursuing a B.S. in Computer Science, expecting to graduate May of 2021.
          </p>
          <p>
            Think of this as a brief summary of my work/interests/projects, something like an overly verbose resume, in the off-chance that you are interested in such a thing...
          </p>
          <b>Interests</b>
          <p>
            I've always enjoyed problem-solving and leaving a positive impact (however small) on those around me.
            My professional interests revolve around problems I see in our society 
            - generally, including education, mass media, partisanship, and freedom of speech, and more recently, the financial world.
            {/* but more generally, I'm interested in any opportunity that allows me to use my problem-solving, analytical, and communication skills to leave a positive impact. */}
          </p>
          <p>
            I originally entered Rice as a Political Science major, intending to pursue law school, 
            and having never written a line of code before. 
            But after a few intro CS courses, I saw not just how fun, but how uniquely impactful software can be 
            – engineers (of any age, race, gender, creed) can tackle problems in such a direct way. 
            I've also come to realize how much I love building things I can call my own.
            So as of now (as nothing is ever set in stone), I'm pursuing in a career in the tech industry as a software engineer, and simply
            exploring what we can teach technology, and what technology can teach us.
          </p>
          <p>
            Outside of school and work, I like to play/watch/coach basketball, learn more about personal fitness, 
            discovering new music, and recently, I've been trying to get into personal finance.
          </p>
          <b>Work</b>
          <p>
            I will TA for Rice's COMP 330 course (Tools & Models for Data Science) this upcoming Fall 2019 semester. 
            The work will involve hosting weekly office hours to reinforce lecture material, involving implementation of standard supervised/unsupervised models, 
            using SQL, MapReduce, Apache Spark, Tensorflow.
          </p>
          <p>
            I am a Software Engineering Intern at JP Morgan Chase & Co. in Houston, Texas this Summer 2019 (June - August 2019). 
          </p>
          <p>
            I've previously worked at a small IT company in Cupertino, <a href="https://www.sihuatech.com/" target="_blank">Sihua Technologies</a>, as
            a Software Engineering Intern (June - August 2018). 
            Their <a href="http://miaoyun.io/" target="_blank">Miaoyun</a> team is building a platform for container orchestration.
            I primarily focused on DevOps, using a <a href="https://www.weave.works/blog/gitops-operations-by-pull-request" target="_blank">GitOps</a> workflow to
            improve their CI pipeline, achieving a 70% decrease in average deployment time.
          </p>
          <p>
            I've also volunteered at a local library with <a href="https://coderdojo.com/" target="_blank">CoderDojo</a> to teach some talented young kids some programming.
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
            <a href="https://github.com/jonathancai11/rackr" target="_blank">Rackr</a> (May 2019) - 
              For the <a href="https://campus.capitalone.com/summits/" target="_blank">May 2019 Capital One Software Engineering Summit Hackathon</a>, 
              I built a receipt scanning and personal finance tracking/analyzing iOS app.
              My team was able to win first place.
            </li>
            <br></br>
            <li>
            <a href="https://github.com/rice-apps/RiceDeliveryUserFrontend" target="_blank">Hedwig</a> (Current) - 
              As a part of <a href="https://www.riceapps.org/" target="_blank">RiceApps</a>, I am building an on-campus food delivery platform for several Rice SRB's.
              We plan to launch on the App Store and at Rice Fall 2019.
            </li>
            <br></br>
            <li> <a href="https://capital-one-bikes-jonathancai.herokuapp.com/" target="_blank">LA Bike-Share Data Analysis</a> (November 2018) -
              My project analyzing LA bike-share data (<a href="https://www.mindsumo.com/contests/bikeshare-data" target="_blank">Mindsumo challenge</a>) 
              was selected as a winning submission to attend the 2019 Capital One Engineering Summit.
            </li>
            <br></br>
            <li>SER Jobs (October 2018) - 
              At <a href="https://careers.jpmorgan.com/us/en/students/programs/code-for-good"> JPMorgan Chase's Code for Good Event</a> in Plano, I worked to revamp SER Houston's digital application process.
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
              Two chrome extensions that do exactly what it sounds like they would do. Currently about 100 users on the Chrome Web Store.
            </li>
            <br></br>
            <li><a href="https://devpost.com/software/riceslang" target="_blank">RiceSlang</a> (March 2018) -
              Built a slackbot to help incoming students understand popular Rice slang terms. Submission to my first hackathon, HackRice 7.5.
            </li>
          </ul>

          <b>Leadership/Extracurriculars</b>
          <p>
            I will be an Orientation Week Advisor Fall 2019, helping out new students get adjusted to life at Rice University for two weeks. 
          </p>
          <p>
            I'm serving as a Peer Academic Advisor at Jones College, helping peers with course scheduling, and all things academic.
          </p>
          <p>
            In the past, I've also served as Jones's Special Services Coordinator, IM Sports Coordinator, and Powderpuff Coach.
          </p>
          <p>
            I'm also involved in the Rice Club Basketball Team, and the Rice Computer Science Club.
          </p>
          <p>
            Senior year of high school, I had some of the most fun volunteering and even celebrated my birthday at a community in Nepal with <a href="http://www.volunteerbasecamp.com/About-Volunteer-BaseCamp/BaseCamp-Nepal">Volunteer BaseCamp</a>. 
            Here's the <a href="https://www.youtube.com/watch?v=FSeBzDUh_1E">video recap</a>. I hope to go back one day.
          </p>


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
            <i>Last updated 6/9/2019.</i>
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
