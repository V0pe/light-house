import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';
import Profilepics from '../images/profilepics.jpg';
import Upcomer from '../images/achvi.jpeg';
import Lucky from '../images/achv2.jpeg';
import Excellence from '../images/achv3.jpeg';

function Dashboard() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const quizzes = ['firstquiz', 'secondquiz','thirdquiz'];
  return (
    <div>
      <section className="head">
        <div className={`dashboard-header ${navbarOpen ? 'navmenu-header' : ''}`}>
        <button className={`menu-btn ${navbarOpen ? 'navmenu-btn' : ''}`} type="button" id="menu" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: 'black', width: '3rem', height: '3rem' ,backgroundColor: "pink"}} />
          ) : (
            <FiMenu style={{ color: 'white', width: '3rem', height: '3rem',backgroundColor: "pink" }} />
          )}
        </button>
        {navbarOpen ? 
          <Link to="/"><img src={Logo} className="app-logo" alt='light-house' />
            </Link> : <Link to="/" onClick={() => closeMenu()}>
          <img src={Profilepics} className="profile-pics" alt="profile-pics" />
          {' '}
        </Link>}
        </div>
      </section>
      <section className={`${navbarOpen ? 'dashboard-navbar' : 'dashboard-nav'}`}>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="quizzes">Quizzes</NavLink>
        <Link className='create-quiz-btn'>Create Quiz</Link>
        <Link className='join-quiz-btn'>Join Quiz</Link>
        <Link className='logout-btn'>Logout</Link>
      </section>

      <section className={`main ${navbarOpen ? 'dashboard-main' : ''}`}>
        <form action="">
          <BiSearchAlt2 /><input type="text" placeholder="search"/>
        </form>
        <div className="achievement-body">
          <h3>Achievements</h3>
          <div className="achievement-ro">
          <div className="achvi-col">
            <img src={Upcomer} alt="medal" />
            <h5>Upcoming x 2</h5>
          </div>
          <div className="achvi-col">
            <img src={Lucky} alt="excellence medal" />
            <h5>Lucky x 4</h5>
          </div>
          <div className="achvi-col">
            <img src={Excellence} alt="luck medal" />
            <h5>Exceptional x 4</h5>
          </div>
        </div>
        </div>
        <div className="quizzes">
          <div className="quiz-header">
            <h3>My Quizzes</h3>
          </div>
          <div className="quizz-container">
            <div className="quizz-col">
                <h4>First Quiz</h4>
                <button type='button'>Start Quiz</button>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
