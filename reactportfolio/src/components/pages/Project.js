import React from 'react';
import '../../styles/Body.css';
import placeholder from '../../images/project-placeholder.png'


export default function Project({name, github, deployed}) {
  return (
    <div className='project'>
                <div class='projectTitleContainer'>
                    <h4 id='mainProjectTitle'>{name}</h4>
                </div>
                <img class='appSnippet' src={placeholder} width="200px" height="200px"
                    alt="A placeholder of the project" />
                <a href={github} id='bigProjectLinks' target="_blank" rel="noreferrer">View the
                    Deployed Application</a>
                <a href={deployed} id='bigProjectLinks' target="_blank" rel="noreferrer">View the
                    Codebase</a>
    </div>
  );
}
