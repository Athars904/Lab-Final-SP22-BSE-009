// components/MyProfile.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedRockets = useSelector((state) => state.myProfile.reservedRockets);
  const joinedMissions = useSelector((state) => state.myProfile.joinedMissions);

  // Assuming the rockets and missions data includes all details
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);

  const reservedRocketsList = reservedRockets.map((rocketId) => 
    rockets.find((rocket) => rocket.id === rocketId)
  );

  const joinedMissionsList = joinedMissions.map((missionId) => 
    missions.find((mission) => mission.mission_id === missionId)
  );

  return (
    <div>
      <h2>My Profile</h2>
      <h3>Reserved Rockets</h3>
      <ul>
        {reservedRocketsList.map((rocket) => rocket && <li key={rocket.id}>{rocket.name}</li>)}
      </ul>
      <h3>Joined Missions</h3>
      <ul>
        {joinedMissionsList.map((mission) => mission && <li key={mission.mission_id}>{mission.mission_name}</li>)}
      </ul>
    </div>
  );
};

export default MyProfile;
