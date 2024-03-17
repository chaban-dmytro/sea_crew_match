import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 90%;
  height: 100%;
  height: 300px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey_bg};
  background: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.74);
  -moz-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.74);
  box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.74);
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  backdrop-filter: blur(2px);
`;

export const ModalHead = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;

  button {
    width: 24px;
    height: 24px;
    background: transparent;
    position: relative;
    transition: transform 0.3s;

    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const LogoLink = styled.a`
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 900;
    font-size: 16px;
  }
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 10px;
  gap: 24px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
  }

  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
