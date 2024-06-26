import React from 'react';

function EmergencyAssistance() {
  return (
    <div className="emergency-assistance">
      <h2>Emergency Assistance</h2>
      <p>
        In case of a severe emergency, call your local emergency services
        immediately.
      </p>
      <div className="emergency-call">
        <p>
          {/* Replace with your local emergency number based on user location */}
          <a href="tel:112">Call Emergency Services (112)</a>
        </p>
        {/* Add button for location sharing (Optional, requires additional logic) */}
        {/* <button>Share My Location</button> */}
      </div>
      <p>
        MediAid can assist with providing first aid information and resources,
        but it cannot replace professional medical help.
      </p>
    </div>
  );
}

export default EmergencyAssistance;

