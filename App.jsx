import React from 'react';
import './styles/main.css';
import SymptomChecker from './components/SymptomChecker';
import FirstAidGuides from './components/FirstAidGuides';
import EmergencyContacts from './components/EmergencyContacts';
import NearbyFacilities from './components/NearbyFacilities';
import EducationalResources from './components/EducationalResources';
import EmergencyAssistance from './components/EmergencyAssistance';
import UserProfile from './components/UserProfile';
import OfflineContent from './components/OfflineContent';

function App() {
  return (
    <div className="container">
      <header>
        <img src="./images/logo.png" alt="MediAid Logo" />
        <h1>MediAid - Your First Aid Companion</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#symptom-checker">Symptom Checker</a></li>
          <li><a href="#first-aid-guides">First Aid Guides</a></li>
          <li><a href="#emergency-contacts">Emergency Contacts</a></li>
          <li><a href="#nearby-facilities">Nearby Facilities</a></li>
          <li><a href="#educational-resources">Educational Resources</a></li>
          <li><a href="#emergency-assistance">Emergency Assistance</a></li>
          <li><a href="#user-profile">User Profile</a></li>
          <li><a href="#offline-content">Offline Content</a></li>
        </ul>
      </nav>
      <main>
        <section id="symptom-checker">
          <h2>Symptom Checker</h2>
          <SymptomChecker />
        </section>
        <section id="first-aid-guides">
          <h2>First Aid Guides</h2>
          <FirstAidGuides />
        </section>
        {/* Add similar sections for each component */}
      </main>
      <footer>
        <p>&copy; MediAid 2024</p>
      </footer>
    </div>
  );
}

export default App;
