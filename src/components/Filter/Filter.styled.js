import styled from "styled-components";

export const FilterWrapper = styled.div`
  font-weight: 400;
  width: 262px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 32px;
`;

export const Title = styled.h3`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.h5};
`;

export const FormTitle = styled.p`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey_text};
`;

export const FormCheckbox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormCheckLabel = styled.label`
  padding-left: 36px;
`;

export const FormCheckInput = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &: checked + span {
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
`;

export const FormCheckSpan = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
  border-radius: 6px;
  margin-left: -36px;
`;

export const FormCheckSvg = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  left: -1px;
  top: -1px;
  fill: ${({ theme }) => theme.colors.white};
`;

export const FormRadio = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormRadioLabel = styled.label`
  padding-left: 36px;
`;

export const FormRadioInput = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &: checked + span {
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
`;

export const FormRadioSpan = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
  border-radius: 24px;
  margin-left: -36px;
`;

export const FormRange = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FormLabel = styled.label`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey_text};
`;

export const FormDate = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const RestBtn = styled.button`
  padding: 12px 0;
  width: 100%;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.grey_bg};
  color: ${({ theme }) => theme.colors.black};
`;

export const SubscribeBtn = styled.button`
  padding: 12px 0;
  width: 100%;
  margin-bottom: 12px;
`;

export const FilterLink = styled.a`
  color: ${({ theme }) => theme.colors.grey_text};
  display: block;
  text-align: center;
`;
