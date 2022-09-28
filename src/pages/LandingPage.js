import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Illustration from '../images/Illustration.png';

// import PropTypes from 'prop-types'

function LandingPage() {
  return (
    <div className='landing-main'>
        <section className='header'>
          <Link to="/">
            <img src={Logo} className="app-logo" alt='light-house' />
          </Link>
          <Link to="create">
            <button id="get-started">Get Started</button>
          </Link>
        </section>
        <section className="landing-body">
            <div className="primary-text">
              <h1>Light house 
                  Bible Quiz</h1>
              <p>We offer a wide variety of Biblical quizzes.</p>
            </div>
            <img src={Illustration} alt='people-talk' />
            <Link to="login">
                <button id="login-btn">Log in</button>
            </Link>
        </section>
        <footer>
              <p> © 2022 Lighthouse. All rights reserved.</p>
        </footer>
    </div>
  )
}

// login.propTypes = {}

export default LandingPage;
