import styled from "styled-components";

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  padding: 8px;
`;

export const Item = styled.li`
  position: relative;

  &:not(:last-child) {
    padding-right: 16px;
    border-right: 1px solid ${({ theme }) => theme.colors.grey_stroke};
  }

  &.active {
    span {
      background: ${({ theme }) => theme.colors.primary};
    }
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  &.done {
    span {
      background: ${({ theme }) => theme.colors.sky};
    }
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Icon = styled.span`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 12px;

  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    fill: ${({ theme }) => theme.colors.grey_text};
    transform: translate(-50%, -50%);
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const Text = styled.div`
  span {
    display: block;
  }
`;
