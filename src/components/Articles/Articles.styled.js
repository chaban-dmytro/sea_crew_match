import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (min-width: 767px) {
      flex-direction: column;
      max-width: 262px;
    }
  }

  span {
    display: block;
    height: 76px;
    width: 100%;
    max-width: 104px;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: 767px) {
      height: 191px;
      width: 100%;
      max-width: 262px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h5 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: 900;
    margin-bottom: 8px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.h6};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.grey_text};
  }
`;
