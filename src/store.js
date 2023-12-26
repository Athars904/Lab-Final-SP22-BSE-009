import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rocketsSlice'; // Adjust the path as necessary
import missionsReducer from './features/missionsSlice'; // Adjust the path as necessary
import myProfileReducer from './features/myProfileSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    myProfile: myProfileReducer,
  },
});

export default store;
