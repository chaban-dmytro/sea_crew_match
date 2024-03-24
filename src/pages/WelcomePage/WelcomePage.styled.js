import styled from "styled-components";
import img_desk from "../../images/welcome-bg-desktop.jpg";
import img_mobile from "../../images/welcome-bg-mobile.jpg";

export const Background = styled.div`
  background-image: url(${img_mobile});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  z-index: -1;

  @media (min-width: 767px) {
    background-image: url(${img_desk});
  }
`;

export const Section = styled.section`
  padding: 50px 16px 0px 16px;
  height: 100vh;

  @media (min-width: 767px) {
    padding: 97px 160px;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 900;
    margin-bottom: 16px;

    @media (min-width: 767px) {
      font-size: ${({ theme }) => theme.fontSize.h1};
    }
  }

  p {
    font-weight: 400;
    margin-bottom: 32px;
  }

  button {
    padding: 12px 24px;
  }
`;
