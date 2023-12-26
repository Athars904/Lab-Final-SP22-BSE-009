// features/myProfileSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  reservedRockets: [],
  joinedMissions: [],
};

// Create the slice
export const myProfileSlice = createSlice({
  name: 'myProfile',
  initialState,
  reducers: {
    // Action to add a reserved rocket
    reserveRocket: (state, action) => {
      state.reservedRockets.push(action.payload);
    },
    // Action to cancel a reserved rocket
    cancelRocket: (state, action) => {
      state.reservedRockets = state.reservedRockets.filter(
        rocketId => rocketId !== action.payload
      );
    },
    // Action to join a mission
    joinMission: (state, action) => {
      state.joinedMissions.push(action.payload);
    },
    // Action to leave a mission
    leaveMission: (state, action) => {
      state.joinedMissions = state.joinedMissions.filter(
        missionId => missionId !== action.payload
      );
    },
  },
});

// Export actions and the reducer
export const { reserveRocket, cancelRocket, joinMission, leaveMission } = myProfileSlice.actions;
export default myProfileSlice.reducer;
