import React from 'react'
// import PropTypes from 'prop-types'

function login() {
  return (
    <div className='login-main'>
        <section className='left'>
            <img src="" alt="light-house" className='row'/>
            <div className="row">
                <h3><quote>“Almost all creativity involves purposeful play.” <i>– Abraham Maslow</i></quote> </h3>
                <button>Join now</button>
            </div>
        </section>
        <section>
            <h1>Sign In</h1>
            <div>
              <div className='login-opt'><img src="src/images/Apple - png.png" alt="apple-logo" />
              <h3>Continue with apple</h3></div>
              <div className='login-opt'><img src="src/images/microsoft.png" alt="microsoft-logo" />
              <h3>Continue with Microsoft</h3></div>
              <div className='login-opt'><img src="src/images/google.png" alt="google-logo" />
              <h3>Continue with Google</h3></div>
            </div>
            <hr />OR <hr />
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
