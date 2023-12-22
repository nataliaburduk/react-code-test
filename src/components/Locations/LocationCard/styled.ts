import styled from 'styled-components';
import { EditBtnProps } from './types';

export const LocationCardWrapper = styled.div`
  position: relative;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.secondaryLight};
  background-color: ${(props) => props.theme.colors.grayLight};
  padding: 15px 25px;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export const CardTitle = styled.div`
  opacity: 0.8;
  color: ${(props) => props.theme.colors.primary};
  font: ${(props) => props.theme.fontsAssets.subtitle};
`;

export const LocationDescription = styled.div`
  font: ${(props) => props.theme.fontsAssets.text};

  h3 {
    font: ${(props) => props.theme.fontsAssets.textHeading};
  }

  div {
    font-family: ${(props) => props.theme.fontsAssets.textRegular};
  }
`;

export const EditBtn = styled.button<EditBtnProps>`
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  width: 26px;
  aspect-ratio: 1;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    svg {
      opacity: 0.8;
    }
  }

  svg {
    opacity: 0.3;
    cursor: pointer;
  }
`;
