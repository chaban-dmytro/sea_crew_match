import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1392px;
  width: 100%;
  padding: 24px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  // @media (min-width: 767px) {
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   background-position: center;
  // }

  // @media (min-width: 1439px) {
  //   height: 100%;
  //   background-size: auto;
  // }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderLogo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 24px;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const HeaderLogoText = styled.span`
  font-weight: 900;
  font-size: 16px;
`;

export const HeaderItems = styled.ul`
  display: flex;
  gap: 24px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
  }

  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const HeaderWrap = styled.div`
  display: flex;

  gap: 12px;
`;

export const HeaderButtonLang = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  color: ${({ theme, active }) => {
    if (active) {
      return theme.colors.black;
    } else {
      return theme.colors.grey_text;
    }
  }};
`;

export const HeaderBtn = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const SearchIconSvg = styled.svg`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: transparent;
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
