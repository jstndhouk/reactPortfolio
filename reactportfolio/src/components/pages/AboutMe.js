import React from 'react';
import '../../styles/Body.css';
import mePhoto from '../../images/port.jpg'


export default function AboutMe() {
  return (
    <div className='aboutMe'>
      <h1>About Me</h1>
      <img src={mePhoto} width="300px" height="375px" alt="A portrait of me, Justin Houk" />
      <p>
      I'm Justin Houk and I am an eager full stack developer and am currently enrolled in Georgia Tech's Coding bootcamp slated to finish in February 2022.
    My approach to software development is 'creating the most simple solution for the most difficult problems'. A good software solution is concise, easy to interpret, and efficient.
    I have spent most of my professional career in the construction management world. Coming from an engineering background, development is a fun and engaging skill to get into and I quickly learned to love the process of programming.
    Take a look at some of my most interesting projects below. I had a lot of fun with these! Feel free to play around with them and let me know if you have any questions. JustFurPets and Lazy-Layover were the biggest projects that I have put together and are particularly special because I had a hand in the design, idea, and functionality. My contact links are at the bottom of this page. Thanks for visiting my portfolio!  Check out my work on my Github!  The links to all my platforms are below.
      </p>
    </div>
  );
}
