import styled from 'styled-components';

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  font: ${(props) => props.theme.fontsAssets.title};
`;
