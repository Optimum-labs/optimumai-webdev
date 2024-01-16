import React from 'react';
import '../assets/css/GoogleFormsDashboard.css';

function GoogleFormsDashboard() {
  return (
    <div className="google-forms-dashboard">
      <h2>Google Forms Dashboard</h2>
      <iframe
        title='Google Form'
        src="https://docs.google.com/forms/d/e/1FAIpQLSdsNp9AwK1XSOJDHULzjEukb5MOwN7fD4rOzTMj2d5LUuRbBA/viewform?embedded=true"
        width="640"
        height="1150"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default GoogleFormsDashboard;
