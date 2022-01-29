import React from 'react';
import '../../styles/Body.css';
import Project from './Project';
let projectArr=[
  {
    name:'Lazy Layover',
    github: 'https://github.com/jstndhouk/Lazy-Layover/',
    deployed:'https://jstndhouk.github.io/Lazy-Layover/'
  },
  {
    name:'JustFurPet',
    github: 'https://github.com/jstndhouk/justFurPets',
    deployed:'https://just-fur-pets.herokuapp.com/api/pet/'
  },
  {
    name:'Weather Dashboard',
    github: 'https://github.com/jstndhouk/Weather-Dashboard',
    deployed:'https://jstndhouk.github.io/Weather-Dashboard/'
  },
  {
    name:'Note-Taker',
    github: 'https://github.com/jstndhouk/Notes-Generator',
    deployed:'https://notes-generator1.herokuapp.com/'
  },
  {
    name:'ReadMe Generator',
    github: 'https://github.com/jstndhouk/README-Generator',
    deployed:'https://jstndhouk.github.io/Daily-Scheduler/'
  },
  {
    name:'My Professional Portfolio',
    github: 'https://github.com/jstndhouk/Professional-Portfolio"',
    deployed:'https://jstndhouk.github.io/Professional-Portfolio/'
  }

]



export default function Portfolio(props) {
  return (
    <div classname='portfolio'>
      <h1>Portfolio</h1>
      <p>
        {projectArr.map((project)=> <Project name={project.name} github={project.github} deployed={project.deployed}/>)}
      </p>
    </div>
  );
}
