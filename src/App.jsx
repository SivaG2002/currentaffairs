
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DailyCurrentAffairs from './pages/DailyCurrentAffairs';
import MCQ from './pages/MCQ';
import Ministers from './pages/Ministers';
import StateAndCapitals from './pages/StateAndCapitals';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-current-affairs" element={<DailyCurrentAffairs />} />
          <Route path="/mcq" element={<MCQ />} />
          <Route path="/ministers" element={<Ministers />} />
          <Route path="/state-and-capitals" element={<StateAndCapitals />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
