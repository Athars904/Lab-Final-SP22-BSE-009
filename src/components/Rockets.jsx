// components/Rockets.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../features/rocketsSlice'; 

export const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketsStatus = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (rocketsStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketsStatus, dispatch]);

  // UI handling for loading, error, and success states
  let content;
  if (rocketsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (rocketsStatus === 'succeeded') {
    content = (
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li> // Adjust as per your rocket object properties
        ))}
      </ul>
    );
  } else if (rocketsStatus === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <section>
      <h2>Rockets</h2>
      {content}
    </section>
  );
};

export default Rockets;
