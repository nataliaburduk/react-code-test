import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { LocationData } from '../../components/pages/AcmeLocations/types';
import { APIEndpoints } from '../api_endpoints';

export const fetchLocations: AsyncThunk<
  LocationData[],
  void,
  { state: RootState }
> = createAsyncThunk('locations/fetch', async (_, { getState }) => {
  const response = await fetch(APIEndpoints.locations);
  const data = await response.json();
  return data;
});
