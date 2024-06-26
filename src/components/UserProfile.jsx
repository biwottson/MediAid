import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);

  // Function to fetch user data (Integration with backend or local storage required)
  const fetchUserData = async () => {
    // Implement logic to fetch user data from backend or local storage
    // Update userData state with retrieved data
  };

  // Function to handle user profile updates (Integration with backend required)
  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    const updatedData = {
      // Update object with new values based on form fields
    };
    // Implement logic to send updated data to backend for storage
    // Update UI to reflect changes (potentially)
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      {!editMode ? (
        <div className="profile-info">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Medical History: {userData.medicalHistory}</p>
          <p>Allergies: {userData.allergies}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleProfileUpdate}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={userData.name} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" defaultValue={userData.email} disabled />
          <label htmlFor="medicalHistory">Medical History:</label>
          <textarea id="medicalHistory" name="medicalHistory" defaultValue={userData.medicalHistory} />
          <label htmlFor="allergies">Allergies:</label>
          <textarea id="allergies" name="allergies" defaultValue={userData.allergies} />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default UserProfile;

