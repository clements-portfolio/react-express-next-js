/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from 'react'

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const About = () => {
  return (
    <div className='about'>
      <h1>About GitHub Search</h1>
      <ul>
          <li>This application leverages HTTP requests to the GitHub API to retrieve GitHub User data and display profiles, repositories, and other details about GitHub developers.</li>
          <li>Author: Clementine Solutions (Steven Clements)</li>
          <li>Version: 1.1.0</li>
      </ul>
    </div>
  )
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default About