import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Google from '../images/google.png';
import Apple from '../images/apple.png';
import Microsoft from '../images/microsoft.png';

// import PropTypes from 'prop-types'

function create2() {
  return (
    <div className='login-main'>
        <section className='left'>
            <img src={Logo} alt="light-house" className='row app-logo'/>
            <div className="row mobile-signhide">
                <h3><quote>“Almost all creativity involves purposeful play.” <i>– Abraham Maslow</i></quote> </h3>
                <button>Join now</button>
            </div>
        </section>
        <section className='create-body'>
            <h1>Create an Account</h1>
            <form action="#">
                <input id="name" name="fullname" type="text" placeholder="Full name"/>
                <input id="number" name="number" type="number" placeholder="Mobile Number"/>
                <input id="church" name="church" type="text" placeholder="Church"/>
                <input id="location" name="location" type="text" placeholder="Location"/>
                <input id="password" name="password" type="password" placeholder="Password"/>
                <button>Complete</button>
            </form>
            <h4>Already have an account <span>Sign in</span></h4>
        </section>
    </div>
  )
}

// login.propTypes = {}

export default create2;
