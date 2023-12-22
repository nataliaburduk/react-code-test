import { LocationsCards } from '../LocationsGrid/styled';
import { ALL_LOCATION_CARD_SKELETONS_COUNT } from './constants';
import { SkeletonCard } from './styled';

export const LocationsGridSkeleton = () => (
  <LocationsCards>
    {Array.from({ length: ALL_LOCATION_CARD_SKELETONS_COUNT }).map(
      (_, index) => (
        <SkeletonCard key={index} />
      )
    )}
  </LocationsCards>
);
