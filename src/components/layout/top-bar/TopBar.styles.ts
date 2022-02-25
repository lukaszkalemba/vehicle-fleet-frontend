import styled from 'styled-components/macro';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 48px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadow.around};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;

  > div {
    display: flex;
  }

  ${({ theme }) => theme.media.xl} {
    position: static;
    width: 100%;
    height: 56px;
    padding-right: 20px;

    > div {
      width: 100%;
    }
  }
`;

const LogoMobileWrapper = styled.div`
  width: 64px;
  height: 100%;

  ${({ theme }) => theme.media.xl} {
    display: none !important;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  padding: 0;

  svg {
    font-size: 24px;
  }
`;

export default {
  Wrapper,
  LogoMobileWrapper,
  IconButton,
};
