// src/hooks/useFetchLocations.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../redux/actions/locationActions';
import { RootState } from '../redux/store';

export const useFetchLocations = () => {
  const dispatch = useDispatch();
  const { process, data, error } = useSelector(
    (state: RootState) => state.locations
  );

  useEffect(() => {
    dispatch(fetchLocations() as any);
  }, [dispatch]);

  return { fetchLocations, process, data, error };
};
