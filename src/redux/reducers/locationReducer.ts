import { createSlice } from '@reduxjs/toolkit';
import { fetchLocations } from '../actions/locationActions';
import { LocationData } from '../../components/pages/AcmeLocations/types';

type LocationsState = {
  process: string;
  data: LocationData[];
  error: string | null;
};

const initialState: LocationsState = {
  process: 'idle',
  data: [],
  error: null,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.process = 'loading';
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.process = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.process = 'error';
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export default locationsSlice.reducer;
