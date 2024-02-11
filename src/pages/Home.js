import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import "../styles/Home.css"
import { StoreMallDirectory } from '@material-ui/icons';

function Home() {
  return (
    <div className="home">
      <div className='about'>
        <h2>Hi, I'm Praveen!</h2>
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
        <h1 className='heading'>About me</h1>
        <div className='skills'>
          <div id="skill1">
            <h1> Problem Solving </h1>
            <table>
              <tr>
                <th>Platform</th>
                <th>Handle</th>
                <th>Rank</th>
                <th>Max Rating</th>
                <th>Problems Solved</th>
              </tr>
              <tr>
                <td>Codeforces</td>
                <td>
                  <a href="https://codeforces.com/profile/novaa" target='_blank' rel="noreferrer" style={{ all: "unset", color: "white" }}>
                    <span style={{ color: "red" }}> novaa</span> {<OpenInNewIcon fontSize='small' />}
                  </a>
                </td>
                <td>Specialist</td>
                <td>1517</td>
                <td>2000+</td>
              </tr>
              <tr>
                <td>Codechef</td>
                <td>
                  <a href="https://www.codechef.com/users/novaa" target='_blank' rel="noreferrer" style={{ all: "unset", color: "white" }}>
                    <span style={{ color: "red" }}> novaa</span> {<OpenInNewIcon fontSize='small' />}
                  </a>
                </td>
                <td>4 star</td>
                <td>1788</td>
                <td>200+</td>
              </tr>
              <tr>
                <td>Leetcode</td>
                <td>
                  <a href="https://leetcode.com/novaa/" target='_blank' rel="noreferrer" style={{ all: "unset", color: "white" }}>
                    <span style={{ color: "red" }}> novaa</span> {<OpenInNewIcon fontSize='small'/>}
                  </a>
                </td>
                <td>Knight</td>
                <td>1811</td>
                <td>300+</td>
              </tr>
            </table>
          </div>
          <div id="skill2">
            <h1> Development</h1>
            <table>
              <tr>
                <th>Frontend</th>
                <th>Backend</th>
                <th>Languages</th>
              </tr>
              <tr>
                <td>
                  <span>React.js, Redux, HTML, CSS, Bootstrap, MaterialUI, Tailwind</span>
                </td>
                <td>
                  <span>
                    Node.js, Express.js, Socket.io, Flask, MySQL, MongoDB
                  </span>
                </td>
                <td>
                  <span>
                    JavaScript, C++, Python, TypeScript
                  </span>
                </td>
              </tr>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home