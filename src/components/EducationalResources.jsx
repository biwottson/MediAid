import React, { useState, useEffect } from 'react';

function EducationalResources() {
  const [resources, setResources] = useState([]);

  // Function to fetch educational resources (Integration with GEMINI APIs required)
  const fetchEducationalResources = async () => {
    // Use GEMINI APIs to fetch educational resources on various first aid topics
    // Update resources state with retrieved data
  };

  // Fetch resources on component mount
  useEffect(() => {
    fetchEducationalResources();
  }, []);

  return (
    <div className="educational-resources">
      <h2>Educational Resources</h2>
      <p>Learn more about first aid and health topics.</p>
      <ul className="resource-list">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <li key={resource.id}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              {/* Add link to the full resource (URL or internal component) */}
            </li>
          ))
        ) : (
          <p>Loading resources...</p>
        )}
      </ul>
    </div>
  );
}

export default EducationalResources;

