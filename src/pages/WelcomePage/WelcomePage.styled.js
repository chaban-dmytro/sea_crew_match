import styled from "styled-components";
import img_desk from "../../images/welcome-bg-desktop.jpg";
import img_mobile from "../../images/welcome-bg-mobile.jpg";
import img_mobile_hover from "../../images/welcome-bg-mobile-hover.png";

export const Background = styled.div`
  background-image: url(${img_mobile_hover}), url(${img_mobile});
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

export const SectionHero = styled.section`
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
      max-width: 548px;
    }
  }

  p {
    font-weight: 400;
    margin-bottom: 32px;
  }

  button {
    padding: 12px 24px;
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: 900;
  margin-bottom: 72px;
  padding-right: 25px;

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSize.h2};
    max-width: 475px;
    margin-bottom: 64px;
  }
`;

export const Text = styled.p`
  font-weight: 900;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.grey_text};

  @media (min-width: 767px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;

export const SectionFindSailor = styled.section`
  margin-bottom: 120px;

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: repeat(3, 170px);
    gap: 24px;
    margin-bottom: 148px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 20px 0;

    @media (min-width: 767px) {
      margin-bottom: auto;
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 4px;
      position: relative;
      padding-left: 80px;

      span:first-child {
        font-weight: 900;
        font-size: ${({ theme }) => theme.fontSize.h5};
      }

      span:last-child {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.grey_text};
        font-size: ${({ theme }) => theme.fontSize.h6};
      }

      div {
        width: 56px;
        height: 56px;
        border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
        border-radius: 12px;
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
      }

      svg {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
  border-radius: 32px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Features = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 767px) {
      gap: 72px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 767px) {
      flex-direction: row;
      align-items: center;
      gap: 80px;
    }

    div:first-child {
      max-width: 548px;
      border-radius: 24px;
      overflow: hidden;
      width: 100%;
    }

    h4 {
      font-size: ${({ theme }) => theme.fontSize.h4};
      font-weight: 900;
      margin-bottom: 14px;
    }

    p {
      font-weight: 400;
      margin-bottom: 24px;
    }

    button {
      padding: 12px 57px;
    }

    img {
      width: 100%;
      aspect-ratio: 1.27;
      object-fit: cover;
    }
  }

  @media (min-width: 767px) {
    ul {
      li {
        &:nth-child(odd) {
          flex-direction: row-reverse;
        }
      }
    }
  }
`;
