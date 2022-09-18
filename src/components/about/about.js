import React from 'react'
import './about.css'
import Workers from './workers.jpg'

function About() {
  return (
    <div id="wrapper">
      <div id="left"><h1 className="about-h1">More about us</h1>
        <h4 className="about-h4">Established in 2018, Tasty Delights, is a company that prides itself in how we make out pastries.<br/> <br/>
        The owner of Tasty Delights, John Doe, ever since he was a little boy, would stand at his mother's side watching her bake.
        At the age of 30, he decided to take that love for pastries and made that dream become a reality. John's love for pastries and how
        it is prepared can also be seen by the employees who delight themselves in preparing each pastry with love and care.
        </h4></div>
      <div id="right">
        <img className="about-img" src={Workers} alt="employees"/>
      </div>
    </div>
  )
}

export default About
