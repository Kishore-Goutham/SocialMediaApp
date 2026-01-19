import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function About() {
  return (
    <div>
      <Navbar/>
       <div className="about-container">
      <h1>About Social Media App</h1>

      <p className="about-intro">
        Welcome to <span>Social Media App</span> — a simple and modern platform
        built to share ideas, posts, and creativity with the world.
      </p>

      <div className="about-card">
        <h2>🚀 What You Can Do</h2>
        <ul>
          <li>Create and share posts</li>
          <li>Search posts by title</li>
          <li>Read content from other users</li>
          <li>Enjoy a clean and responsive UI</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>🛠️ Built With</h2>
        <p>
          This application is developed using <strong>React.js</strong>, focusing
          on reusable components, fast performance, and a smooth user experience.
        </p>
      </div>

      <div className="about-card">
        <h2>🌱 Our Vision</h2>
        <p>
          We aim to continuously improve this platform by adding features like
          user authentication, comments, likes, and real-time updates.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About