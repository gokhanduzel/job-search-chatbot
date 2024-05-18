import React, { useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message to messages array
    setMessages([...messages, { text: input, sender: 'user' }]);

    try {
      // Send user input to backend for processing
      const response = await axios.post('http://localhost:5002/api/chatbot', { prompt: input });

      // Log the response to inspect its structure
      console.log('API Response:', response.data);

      // Assuming response.data.message is an array of job objects
      const jobs = response.data.message;

      // Log the jobs array
      console.log('Jobs:', jobs);

      // Add bot response to messages array
      setMessages([...messages, { text: input, sender: 'user' }, { text: jobs, sender: 'bot' }]);

      // Clear input field
      setInput('');
    } catch (error) {
      console.error('Error processing prompt:', error);
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'bot' && Array.isArray(message.text) ? (
              message.text.map((job, idx) => <JobCard key={idx} job={job} />)
            ) : (
              <p>{message.text}</p>
            )}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
