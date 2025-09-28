
import React from 'react';
import HomeCarousel from '../components/Carousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <HomeCarousel />
      
      <section className="features-section">
        <div className="feature-card">
          <h2>Daily News</h2>
          <p>Stay updated with the most recent events and happenings from around the world.</p>
        </div>
        <div className="feature-card">
          <h2>MCQs</h2>
          <p>Test your knowledge with our daily quizzes and see where you stand.</p>
        </div>
        <div className="feature-card">
          <h2>General Knowledge</h2>
          <p>Explore information about government, states, and capitals.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2024 Current Affairs Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
