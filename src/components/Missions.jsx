// components/Missions.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../features/missionsSlice'; 

export const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const missionsStatus = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(fetchMissions());
    }
  }, [missionsStatus, dispatch]);

  // Render UI based on missions state
  let content;
  if (missionsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (missionsStatus === 'succeeded') {
    content = (
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    );
  } else if (missionsStatus === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <section>
      <h2>Missions</h2>
      {content}
    </section>
  );
};

export default Missions;
