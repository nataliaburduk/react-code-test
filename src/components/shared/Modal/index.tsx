import React from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/Close.svg';
import {
  ModalWrapper,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from './styled';

import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => (
  <ModalWrapper>
    <ModalContent>
      <ModalHeader>
        <h2>{title}</h2>
        <CloseIcon onClick={onClose} />
      </ModalHeader>

      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <button onClick={onClose}>Done</button>
      </ModalFooter>
    </ModalContent>
  </ModalWrapper>
);
