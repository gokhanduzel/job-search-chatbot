// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/ChatBot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Job Search Chatbot</h1>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
