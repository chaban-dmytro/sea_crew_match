import styled from "styled-components";

export const FormRadio = styled.ul`
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
      border: 2px solid ${({ theme }) => theme.colors.primary};

      &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.colors.primary};
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
    border-radius: 24px;
    margin-left: -36px;
  }
`;
