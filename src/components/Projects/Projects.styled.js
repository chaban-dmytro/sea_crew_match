import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Search = styled.input`
  height: 48px;
  margin-bottom: 48px;
  border-radius: 8px;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Tag = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  border-radius: 38px;
  padding: 6px 8px 6px 16px;
  background-color: ${({ theme }) => theme.colors.grey_bg};
`;

export const Button = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  position: relative;
`;

export const Svg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.red};

  &:hover {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const SortWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Sort = styled.ul`
  display: flex;
  background: tomato;
`;
