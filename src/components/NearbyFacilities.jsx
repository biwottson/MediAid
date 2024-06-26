import React, { useState, useEffect } from 'react';

function NearbyFacilities() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyFacilities, setNearbyFacilities] = useState([]);

  // Function to check if geolocation is supported and enabled
  const checkGeolocation = () => {
    if (navigator.geolocation) {
      setGeolocationEnabled(true);
    } else {
      setGeolocationEnabled(false);
    }
  };

  // Function to handle user location permission and fetch nearby facilities
  const getUserLocation = async () => {
    if (geolocationEnabled) {
      try {
        const position = await navigator.geolocation.getCurrentPosition((pos) => {
          setUserLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        });
        // Use user location to fetch nearby facilities from GEMINI APIs (Integration required)
        // Update nearbyFacilities state with retrieved data
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    } else {
      console.warn("Geolocation is not enabled");
    }
  };

  // Fetch nearby facilities on component mount (Optional)
  useEffect(() => {
    checkGeolocation();
  }, []);

  return (
    <div className="nearby-facilities">
      <h2>Nearby Medical Facilities</h2>
      <p>
        Find hospitals, clinics, and pharmacies near your location.
      </p>
      {geolocationEnabled ? (
        <button onClick={getUserLocation}>Find Nearby Facilities</button>
      ) : (
        <p>Geolocation is not supported or enabled.</p>
      )}
      {userLocation && nearbyFacilities.length > 0 ? (
        <ul className="facilities-list">
          {nearbyFacilities.map((facility) => (
            <li key={facility.id}>
              <h3>{facility.name}</h3>
              <p>{facility.address}</p>
              <p>{facility.phone}</p>
              {/* Add link to facility details (optional) */}
            </li>
          ))}
        </ul>
      ) : (
        userLocation && <p>No nearby facilities found.</p>
      )}
    </div>
  );
}

export default NearbyFacilities;


