import { useEffect } from 'react';
import { useFetchLocations } from '../../../hooks/useFetchLocations';
import { NavBar } from '../../shared/NavBar';
import { LocationsGrid } from '../../Locations/LocationsGrid';
import { MainSection } from './styled';
import { LocationsGridSkeleton } from '../../Locations/LocationsGridSkeleton';
import { MessageContainer } from '../../shared/MessageContainer';
import { ERROR_MESSAGE, NO_LOCATIONS } from './constants';

export const AcmeLocations: React.FC = () => {
  const { fetchLocations, process, data, error } = useFetchLocations();

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  const isLoaded = process === 'fulfilled';

  return (
    <>
      <NavBar title="Acme locations" />
      <MainSection>
        {error && <MessageContainer message={ERROR_MESSAGE} />}
        {!error && !isLoaded && <LocationsGridSkeleton />}
        {isLoaded && !data && <MessageContainer message={NO_LOCATIONS} />}
        {isLoaded && data && <LocationsGrid locations={data} />}
      </MainSection>
    </>
  );
};
