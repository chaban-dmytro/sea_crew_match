import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .horizontal-slider {
    width: 100%;
    height: 30px;
  }

  .example-track {
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
  }

  .example-track-0,
  .example-track-2 {
    height: 1px;
    background: ${({ theme }) => theme.colors.grey_text};
  }

  .example-track-1 {
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }

  .example-thumb {
    width: 16px;
    height: 16px;
    top: 50%;
    outline: none;
    color: transparent;
    transform: translateY(-50%);
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    line-height: 38px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  label {
    position: relative;

    span {
      position: absolute;
      top: 50%;
      right: 14px;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.colors.grey_text};
    }
  }

  input {
    padding-right: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`;
