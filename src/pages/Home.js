import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className='about'>
        <h2>Hi, My Name is Praveen !</h2>
        <div className='prompt'>
          <p>
            A Competitive Programmer
          </p>
          <p>
            A Frontend Developer with strong Problem Solving Skills
          </p>
          <p>
            Passionate about Data Structures and Algorithms
          </p>
          <p>A Youtube Tutor!</p>
        </div>
        <div className='myprofiles'>
          <a href="https://www.linkedin.com/in/praveennooka/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
          </a>
          <a href="mailto:praveennooka123@gmail.com">
              <EmailIcon />
          </a>
          <a href="https://github.com/nova0077" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className='skillsContainer'>
        <h1 className='heading'>SKILLS</h1>
        <div className='skills'>
          <h1> Problem Solving </h1>
          <ul className='list'>
            <li className='item'>
              <h2> Competitive Programming</h2>
              <span>
                Codeforces: Specialist,<br/> 
                Codechef : 4 star<br/>
                Leetcode: 1822
              </span>
            </li>
            <li className='item'>
              <h2>DSA</h2>
              <span>
                Leetcode: 422 problems <br/>
                GFG: 315 problems
              </span>
            </li>
            <li className='item'>
              <h2>Coding Profiles</h2>
              <span>
                CodeForces : 
                <a href="https://codeforces.com/profile/novaa" target='_blank' rel="noreferrer" style={{all:"unset", color: "white"}}>
                   <span style={{color:"red"}}> novaa</span> {<OpenInNewIcon />} 
                </a> <br/>
                CodeChef : 
                <a href="https://www.codechef.com/users/novaa" target='_blank' rel="noreferrer" style={{all:"unset", color: "white"}}>
                   <span style={{color:"red"}}> novaa</span> {<OpenInNewIcon />} 
                </a> <br/>
                LeetCode: 
                <a href="https://leetcode.com/novaa/" target='_blank' rel="noreferrer" style={{all:"unset", color: "white"}}>
                   <span style={{color:"red"}}> novaa</span> {<OpenInNewIcon />} 
                </a> <br/>
              </span>
            </li>
          </ul>
        </div>
        <div className='skills'>
          <h1> Development</h1>
          <ul className='list'>
            <li className='item'>
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span>
                NodeJS, ExpressJS, Socket.IO, Flask, MySQL, MongoDB
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>
                JavaScript, C++, Python, TypeScript
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home