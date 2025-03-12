import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
      setError('All fields are required.');
      return;
    }

    setSubmittedData(formData);
    setFormData({ name: '', email: '', feedback: '' }); 
    setError(''); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="feedback"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {submittedData && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Submitted Feedback</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;

