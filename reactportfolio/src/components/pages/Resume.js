import React from 'react';
import '../../styles/Body.css';

export default function Resume() {
  return (
    <div id='resume'>
      <h1>Resume Form</h1>
      <p id='techBurb'>
        I am proficient in the following technologies and tools:  HTMl, CSS, JavaScript, SQL, MongoDB, GraphQL, Sequelize, Mongoose, React.js, Handlebars.js, Express.js, and more.  Check out my resume link below to see my full experience and contact info.
      </p>
      <a href="https://docs.google.com/document/d/1Y_YnUVqQNRVEigovobMBTnSt6RHJWhyiQTmZY6au97o/edit?usp=sharing"
            target="_blank">Resume</a>
    </div>
  );
}
