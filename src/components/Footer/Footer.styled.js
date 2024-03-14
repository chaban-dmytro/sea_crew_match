import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 119px 0 121px;
  /* border-top: 1px solid ${({ theme }) => theme.colors.grey_stroke}; */
`;

export const FooterLogo = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-right: 24px;
  margin-bottom: 24px;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const FooterLogoText = styled.span`
  font-weight: 900;
  font-size: 16px;
`;

export const Privacy = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 66px;
`;

export const SocialItems = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
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
