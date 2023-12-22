import { ReactComponent as UserIcon } from '../../../assets/icons/Users.svg';
import { ReactComponent as TimezoneIcon } from '../../../assets/icons/Timezone.svg';
import { ReactComponent as ViewsIcon } from '../../../assets/icons/Views.svg';
import { LocationDetailsWrapper } from './styled';
import { LocationDetailsProps } from './types';

export const LocationDetails: React.FC<LocationDetailsProps> = ({
  users,
  timezone,
  views,
}) => (
  <LocationDetailsWrapper>
    <div>
      <UserIcon />
      <p>
        {users} {users === 1 ? 'User' : 'Users'}
      </p>
    </div>
    <div>
      <TimezoneIcon />
      <p>{timezone}</p>
    </div>
    <div>
      <ViewsIcon />
      <p>
        {views} {views === 1 ? 'View' : 'Views'}
      </p>
    </div>
  </LocationDetailsWrapper>
);
