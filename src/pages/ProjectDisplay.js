import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
  const {id} = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>{project.description}</p>
      <h2>
          Techstack: {project.skills}
      </h2>
      <div className='projectLinks'>
        <div>
          <GitHubIcon />
          <span>Repo Link : </span>
          <a href={project.repoLink} target='_blank' rel="noreferrer">
            <OpenInNewIcon className='openicon'/>
          </a>
        </div>
        {project.deploymentLink !== null ? (
          <div>
            <span>Deployment Link: </span>
            <a href={project.deploymentLink} target='_blank' rel="noreferrer">
              <OpenInNewIcon className='openicon'/>
            </a>
          </div>
        ): null}

      </div>
    </div>
  );
}
export default ProjectDisplay; 