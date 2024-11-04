import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Xcentric</h1>
          <p>Your partner in innovative solutions.</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzU3MDB8MHwxfGFsbHwyfHx8fHx8fHwxNjIxNjU5NzY4&ixlib=rb-1.2.1&q=80&w=1080" alt="Web Development" />
          <h3>Web Development</h3>
          <p>We build modern, responsive websites to help your business thrive online.</p>
        </div>
        <div className="service">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzU3MDB8MHwxfGFsbHwyfHx8fHx8fHwxNjIxNjU5NzY4&ixlib=rb-1.2.1&q=80&w=1080" alt="App Development" />
          <h3>App Development</h3>
          <p>Creating cutting-edge mobile applications tailored to your needs.</p>
        </div>
        <div className="service">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzU3MDB8MHwxfGFsbHwyfHx8fHx8fHwxNjIxNjU5NzY4&ixlib=rb-1.2.1&q=80&w=1080" alt="Digital Marketing" />
          <h3>Digital Marketing</h3>
          <p>Innovative marketing solutions to boost your online presence.</p>
        </div>
        <div className="service">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzU3MDB8MHwxfGFsbHwyfHx8fHx8fHwxNjIxNjU5NzY4&ixlib=rb-1.2.1&q=80&w=1080%22" alt="Legal Services" />
          <h3>Legal Services</h3>
          <p>Expert legal advice to protect your business interests.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
