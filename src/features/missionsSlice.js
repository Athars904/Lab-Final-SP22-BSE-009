import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching mission data
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

// Define the initial state of the missions slice
const initialState = {
  missions: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// Create the slice
export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // Reducers for other mission actions here, if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add fetched missions to the array
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionsSlice.reducer;
