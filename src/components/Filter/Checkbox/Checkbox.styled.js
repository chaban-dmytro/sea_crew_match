import styled from "styled-components";

export const FormCheckbox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  label {
    padding-left: 36px;
  }

  input {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);

    &:checked + span {
      background-color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};

      &::after {
        content: "";
        height: 8px;
        position: absolute;
        background-color: red;
      }
    }

    &:focus + span {
      border-color: ${({ theme }) => theme.colors.black};
    }
  }

  span {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
    border-radius: 6px;
    margin-left: -36px;

    svg {
      position: absolute;
      width: 24px;
      height: 24px;
      left: -1px;
      top: -1px;
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
