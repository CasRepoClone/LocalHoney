import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${name}! We'll be in touch soon.`);
    // Clear the form
    setName('');
    setMessage('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px',
        gap: '1rem',
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem' }}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
