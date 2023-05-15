import React, { useState } from 'react';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function togglePopUp() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={togglePopUp}>FAQ</button>
      {isOpen ? (
        <div className="popup-content">
          <h2>FAQs</h2>
          <p>Q: What is React JS?</p>
          <p>A: React JS is a JavaScript library for building user interfaces.</p>
          <p>Q: How do I install React JS?</p>
          <p>A: You can install React JS using npm or yarn.</p>
        </div>
      ) : null}
    </div>
  );
}

export default About;