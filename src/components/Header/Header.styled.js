import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1392px;
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
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
  gap: 24px;
  padding: 0 24px;
`;

export const HeaderLogo = styled.div`
  margin-right: 24px;
`;

export const HeaderLogoText = styled.span`
  font-weight: 900;
  font-size: 16px;
`;

export const HeaderItems = styled.ul`
  display: flex;
  gap: 24px;
`;

export const HeaderItem = styled.li`
  display: flex;
`;

export const HeaderWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const HeaderButtonLang = styled.button`
  border: none;
  cursor: pointer;
`;
