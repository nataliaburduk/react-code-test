import { useState } from 'react';
import { LocationDetails } from '../LocationDetails';
import { ReactComponent as EditIcon } from '../../../assets/icons/Edit.svg';
import {
  LocationCardWrapper,
  CardTitle,
  EditBtn,
  LocationDescription,
} from './styled';
import { LocationCardProps } from './types';
import { formatDate } from '../../../utilities/formatDate';
import { Modal } from '../../shared/Modal';

export const LocationCard: React.FC<LocationCardProps> = ({
  name,
  userCount,
  description,
  createdAt,
}) => {
  const [views, setViews] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const formattedDate = formatDate(createdAt);

  const onClickEdit = () => {
    setViews((prevViews) => ++prevViews);
    setIsSelected(true);
  };
  const closeModal = (): void => {
    setIsSelected(false);
    setIsHovered(false);
  };

  return (
    <LocationCardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !isSelected && setIsHovered(false)}
    >
      {isHovered && (
        <EditBtn onClick={onClickEdit}>
          <EditIcon />
        </EditBtn>
      )}

      <CardTitle>{name}</CardTitle>
      <LocationDetails
        users={userCount}
        timezone={formattedDate}
        views={views}
      />

      {isSelected && (
        <Modal title={name} onClose={closeModal}>
          <LocationDetails
            users={userCount}
            timezone={formattedDate}
            views={views}
          />
          <LocationDescription>
            <h3>Description</h3>
            <div>{description}</div>
          </LocationDescription>
        </Modal>
      )}
    </LocationCardWrapper>
  );
};
