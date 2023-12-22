import styled from 'styled-components';

export const LocationDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      margin: 0;
      opacity: 0.8;
      color: ${(props) => props.theme.colors.primary};
      font: ${(props) => props.theme.fontsAssets.text};
    }

    svg {
      opacity: 0.3;
    }
  }
`;
