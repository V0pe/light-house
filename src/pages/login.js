import React from 'react';
import Logo from '../images/logo.png';
import Google from '../images/google.png';
import Apple from '../images/apple.png';
import Microsoft from '../images/microsoft.png';

// import PropTypes from 'prop-types'

function login() {
  return (
    <div className='login-main'>
        <section className='left'>
            <img src={Logo} alt="light-house" className='row app-logo'/>
            <div className="row mobile-signhide">
                <h3><quote>“Almost all creativity involves purposeful play.” <i>– Abraham Maslow</i></quote> </h3>
                <button>Join now</button>
            </div>
        </section>
        <section className='login-body'>
            <h1>Sign In</h1>
            <div className='login-col'>
              <div className='login-opt'><img src={Apple} alt="apple-logo" />
              <h3>Continue with apple</h3></div>
              <div className='login-opt'><img src={Microsoft} alt="microsoft-logo" />
              <h3>Continue with Microsoft</h3></div>
              <div className='login-opt'><img src={Google} alt="google-logo" />
              <h3>Continue with Google</h3></div>
            </div>

            <div className='hori'><hr />OR <hr /></div>
            <form action="#">
                <input className="email" name="email" type="email" placeholder="Email address"/>
                <input type="password" name="password" className="password" placeholder="Password"/>
                <button>Continue</button>
            </form>
            <h4>Don't have an account <span>Sign up</span></h4>
        </section>
    </div>
  )
}

// login.propTypes = {}

export default login
