import styled from "styled-components";

export const FilterWrapper = styled.div`
  font-weight: 400;
  width: 100%;
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
  margin-bottom: 14px;
`;

export const FormRange = styled.form`
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
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 12px 0;
  width: 100%;
  margin-bottom: 12px;

  span {
    display: block;
  }

  svg {
    display: block;
    position: relative;
    left: 0;
    transform: translate(0);
    width: 23px;
    height: 23px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const FilterLink = styled.a`
  color: ${({ theme }) => theme.colors.grey_text};
  display: block;
  text-align: center;
`;

export const InputSelectWrapper = styled.div`
  width: 100%;
`;
