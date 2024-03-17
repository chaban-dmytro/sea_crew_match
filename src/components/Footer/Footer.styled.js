import styled from "styled-components";

export const Border = styled.span`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.grey_stroke};
  position: absolute;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  padding: 104px 24px;
  gap: 72px;
  position: relative;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1120px;
    padding: 119px 10px 121px;
    gap: 16px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;

  @media (min-width: 767px) {
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    margin-right: 24px;
    margin-bottom: 24px;
  }
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const FooterLogoText = styled.span`
  font-weight: 900;
  font-size: 24px;
`;

export const Privacy = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;

  @media (min-width: 767px) {
    margin-bottom: 66px;
  }
`;

export const SocialItems = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    justify-content: flex-start;
  }
`;

export const SocialItem = styled.li`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.grey_text};

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h5};

  p {
    font-weight: 900;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.p1};
    }
  }
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.h5};

  p {
    font-weight: 900;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    a {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.p1};
    }

    span {
      display: block;
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.grey_text};
      font-size: ${({ theme }) => theme.fontSize.h6};
    }
  }
`;

export const FilterBtn = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  fill: ${({ theme }) => theme.colors.white};

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.h6};
    background: ${({ theme }) => theme.colors.black};
    padding: 4px 8px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    position: absolute;
    top: -20px;
    right: -20px;
  }

  @media (min-width: 767px) {
    display: none;
  }
`;
