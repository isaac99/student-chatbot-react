import React, { useState } from 'react';
import axios from 'axios';


const Main = () => {
  const [messages, setMessages] = useState([]); // State to hold messages
  const [input, setInput] = useState(''); // State for the chat input

  const apiLink = 'http://localhost:3010';
  // Handle message submission
  const handleSend = async () => {
    const result = await axios.post(`${apiLink}/messages/save-message`, { messageText: input, teacherId: 1, studentName: 'Justin Jr.' });

    console.log(result);
    if (input !== '') {
      console.log(input);
      setMessages([...messages, input]);
      setInput('');
    }    
  };

  return (
    <main style={styles.main}>

      {/* Message Display */}
      <div style={styles.chatWindow}>
        {messages.length === 0 ? (
          <p style={styles.placeholder}>No messages yet...</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={styles.message}>
              {msg}
            </div>
          ))
        )}
      </div>

      {/* Chat Input */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </main>
  );
};

const styles = {
  main: { padding: '2rem', textAlign: 'center', background: '#f5f5f5' },
  chatWindow: {
    margin: '1rem auto',
    padding: '1rem',
    width: '80%',
    maxHeight: '300px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#fff',
  },
  placeholder: { color: '#888', fontStyle: 'italic' },
  message: { padding: '0.5rem', borderBottom: '1px solid #f0f0f0', textAlign: 'left' },
  inputContainer: { display: 'flex', justifyContent: 'center', marginTop: '1rem' },
  input: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    background: '#61dafb',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
};

export default Main;
