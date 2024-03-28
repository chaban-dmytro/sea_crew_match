import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1392px;
  width: 100%;
  padding: 24px 10px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 1392px;
    width: 100%;
    padding: 24px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  nav {
    display: none;

    @media (min-width: 767px) {
      display: flex;
    }
  }

  @media (min-width: 1080px) {
    gap: 16px;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 16px;

  @media (min-width: 1080px) {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: 24px;
  }
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;

  @media (min-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;

export const HeaderLogoText = styled.span`
  display: none;

  @media (min-width: 1080px) {
    display: block;
    font-weight: 900;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  gap: 12px;

  div {
    display: none;

    @media (min-width: 767px) {
      display: flex;
    }
  }
`;

export const HeaderBtn = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  ${({ user }) => {
    if (user) {
      return `display: none`;
    } else {
      return;
    }
  }};

  @media (min-width: 767px) {
    display: block;
  }
`;

export const SearchIconSvg = styled.svg`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PostBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.p2};
  background-color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5;
  border: transparent;
  border-radius: 8px;
  padding: 12px 24px;
  margin-right: 8px;
  cursor: pointer;
  display: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 1080px) {
    display: block;
  }
`;

export const BurgerBtn = styled.button`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.grey_bg};
  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 767px) {
    display: none;
  }
`;
