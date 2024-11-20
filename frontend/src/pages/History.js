import React, { useState } from 'react';

const MessageHistory = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:3010/messages/message-history');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      console.log(data);
      setMessages(data.response);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const styles = {
    container: {
      padding: '2rem',
    },
    button: {
      padding: '0.7rem 1.5rem',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      marginBottom: '1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      border: '1px solid #ddd',
      padding: '0.5rem',
      backgroundColor: '#f2f2f2',
    },
    td: {
      border: '1px solid #ddd',
      padding: '0.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Message History</h2>
      <button style={styles.button} onClick={fetchMessages}>
        Load Messages
      </button>
      {messages.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Teacher ID</th>
              <th style={styles.th}>Student Name</th>
              <th style={styles.th}>Message Text</th>
              <th style={styles.th}>Created At</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td style={styles.td}>{message.id}</td>
                <td style={styles.td}>{message.teacher_id}</td>
                <td style={styles.td}>{message.student_name}</td>
                <td style={styles.td}>{message.message_text}</td>
                <td style={styles.td}>{new Date(message.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No messages to display.</p>
      )}
    </div>
  );
};

export default MessageHistory;