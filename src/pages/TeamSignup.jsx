import React, { useState, useEffect } from 'react';
import '../assets/css/TeamSignup.css';

function TeamSignup() {
  const [teamName, setTeamName] = useState('');
  const [teamLead, setTeamLead] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedData = localStorage.getItem('teamSignupData');
    if (storedData) {
      const { teamName, teamLead, email, phone } = JSON.parse(storedData);
      setTeamName(teamName);
      setTeamLead(teamLead);
      setEmail(email);
      setPhone(phone);
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { teamName, teamLead, email, phone };

    // Save data to local storage
    localStorage.setItem('teamSignupData', JSON.stringify(formData));

    setSubmitted(true);
  };

  return (
    <div className="team-signup-container">
      {submitted ? (
        <div className="team-details-card">
          <h2>Your Team Details</h2>
          <p><strong>Team Name:</strong> {teamName}</p>
          <p><strong>Team Lead:</strong> {teamLead}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="team-signup-form">
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />

          <label htmlFor="teamLead">Team Lead:</label>
          <input
            type="text"
            id="teamLead"
            value={teamLead}
            onChange={(e) => setTeamLead(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default TeamSignup;
