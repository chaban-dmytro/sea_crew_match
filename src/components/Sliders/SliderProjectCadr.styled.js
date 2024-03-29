import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;

  .swiper {
    @media (min-width: 1120px) {
      max-width: 1026px;
      margin: 0;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const Item = styled.li`
  max-width: 326px;
  border-radius: 24px;
  margin-bottom: 32px;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);

  @media (min-width: 767px) {
    box-shadow: none;
    max-width: 500px;
  }

  div:first-child {
    margin-bottom: 0;
  }
  /* 
  div {
    display: flex;
    align-items: center;
    gap: 18px;

    span {
      display: block;
    }

    span:first-child {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
    }

    h5 {
      font-size: ${({ theme }) => theme.fontSize.h5};
      font-weight: 900;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.p3};
      color: ${({ theme }) => theme.colors.grey_text};
    }
  }

  ul {
    display: flex;
    gap: 32px;

    span {
      display: block;
    }

    span:nth-child(1) {
      font-size: ${({ theme }) => theme.fontSize.h6};
      color: ${({ theme }) => theme.colors.grey_text};
      font-weight: 800;
    }

    span:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.h5};
      font-weight: 900;
    }

    span:nth-child(3) {
      font-size: ${({ theme }) => theme.fontSize.p3};
      color: ${({ theme }) => theme.colors.grey_text};
      font-weight: 500;
    }
  } */
`;

export const SliderNav = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  gap: 8px;

  @media (min-width: 1120px) {
    left: auto;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
  }

  button {
    width: 48px;
    height: 48px;
    background: transparent;

    &:hover {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;
