import { LocationCard } from '../LocationCard';
import { LocationsCards } from './styled';
import { LocationsGridProps } from './types';

export const LocationsGrid: React.FC<LocationsGridProps> = ({ locations }) => (
  <LocationsCards>
    {locations.map((location) => (
      <LocationCard key={location.id} {...location} />
    ))}
  </LocationsCards>
);
