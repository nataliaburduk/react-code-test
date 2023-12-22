import styled from 'styled-components';

export const SkeletonCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 340px;
  height: 139px;
  border-radius: 2px;
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: ${(props) => props.theme.colors.gray};
    }
    100% {
      background-color: ${(props) => props.theme.colors.grayLight};
    }
  }
`;
