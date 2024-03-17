import styled from "styled-components";

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 24px;
`;

export const Button = styled.button`
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : "transparent"};
  width: 32px;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.p3};
  position: relative;
  transition: all 0.5s;

  svg {
    fill: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.black};
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 767px) {
      width: 25px;
      height: 25px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  @media (min-width: 767px) {
    width: 48px;
    height: 48px;
    font-size: ${({ theme }) => theme.fontSize.p2};
  }
`;
