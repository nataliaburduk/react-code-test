import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.shade};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 16px 25px;
  border-radius: 8px;
  max-width: 440px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font: ${(props) => props.theme.fontsAssets.subtitle};
  }

  svg {
    opacity: 0.3;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  font: ${(props) => props.theme.fontsAssets.text};
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.buttonPrimary};
    font: ${(props) => props.theme.fontsAssets.text};
    border: none;
    color: ${(props) => props.theme.colors.white};
    padding: 4px 15px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonPrimaryFocused};
    }
  }
`;
