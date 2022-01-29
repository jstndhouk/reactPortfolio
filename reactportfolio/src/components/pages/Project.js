import React from 'react';
import '../../styles/Body.css';
import mePhoto from '../../images/projec.jpg'


export default function AboutMe() {
  return (
    <div classname='aboutMe'>
    <card id="Project1">
                <div class='projectTitleContainer'>
                    <h4 id='mainProjectTitle'>Lazy-Layover</h4>
                </div>
                <img class='appSnippet' src=./assets/images/LazyLayoverSnippet.png width="500px" height="200px"
                    alt="A screenshot of Lazy-Layover landing page" />
                <a href="https://jstndhouk.github.io/Lazy-Layover/" id='bigProjectLinks' target="_blank">View the
                    Deployed Application</a>
                <a href="https://github.com/jstndhouk/Lazy-Layover/" id='bigProjectLinks' target="_blank">View the
                    Codebase</a>
            </card>
    </div>
  );
}
