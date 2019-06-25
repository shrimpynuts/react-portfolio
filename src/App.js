import React, { Component } from 'react';
import './App.css';
import img from './files/head.jpeg';
import pdf from './files/Jonathan-Cai-Resume.pdf';
import Blog from './Blog';
import PaperElement from './Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import work from './Work';
import StickyFooter from './StickyFooter';
import ContactCard from './ContactCard';


class App extends Component {
  render() {

    return (
      <div className="App">
        <CssBaseline />

        <div className="App-main">
        <img src={img} width={300} height={300} />

          <div className="intro"> 
                <div>
                    <p>
                      Hi! I'm Jonathan Cai.
                    </p>
                    <p>
                      I'm an undergraduate student at Rice University in Houston, Texas. 
                      I'm about to enter my third year, pursuing a B.S. in Computer Science, expecting to graduate May of 2021.
                    </p>
                    <p>
                      This as a brief summary of my work/interests/projects, in the off-chance that you are interested in such a thing...
                    </p>
                </div>
                <ContactCard/>
          </div>



          <b className="header">Interests</b>
          <p>
            I've always enjoyed problem-solving and leaving a positive impact (however small) on those around me.
            My professional interests revolve around problems I see in our society 
            - generally, including education, mass media, partisanship, and freedom of speech, and more recently, the financial world.
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
          <b className="header">Work</b>

          {work.map(w => <PaperElement details={w.details} img={w.img} org={w.org} date={w.date} body={w.body}/>)}
          
          <p>
            The rest of my experiences are varied - from <a href="https://khanna.house.gov/" target="_blank">a congressional campaign</a>, 
            to <a href="https://www.sacattorneys.com/" target="_blank">my dad's law firm</a>, 
            to <a href="http://www.ufrate.com/en/" target="_blank">a small startup incubator</a>.
            You can find out more about these other experiences on <a href="https://www.linkedin.com/in/jonathan-cai/" target="_blank">my LinkedIn</a>.
          </p>

          <b className="header">Projects</b>

          <Blog/>

          <b className="header">Leadership/Extracurriculars</b>
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


          {/* <b className="header">Contact</b>
          <p>
            More about me: &nbsp;
            <a href="https://www.linkedin.com/in/jonathan-cai/" target="_blank">LinkedIn</a> &nbsp;
            <a href="https://github.com/jonathancai11" target="_blank">Github</a> &nbsp;
            <a href={pdf} target="Jonathan Cai Resume" target="_blank">Resume</a>
          </p> */}
          {/* <footer>
            <i>Last updated 6/23/2019.</i>
          </footer> */}


        </div>
        <StickyFooter/>
      </div>
    );
  }
}

export default App;
