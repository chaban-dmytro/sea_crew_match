import styled from "styled-components";

export const Items = styled.ul`
  a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
  }

  :hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (min-width: 767px) {
    max-width: 1392px;
    width: 100%;
    display: flex;
    gap: 24px;
    align-items: center;
    margin: 0 auto;
  }
`;
