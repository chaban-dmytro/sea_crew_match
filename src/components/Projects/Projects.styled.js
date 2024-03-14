import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const SearchWrap = styled.div`
  margin-bottom: 48px;
  position: relative;
`;

export const SearchInput = styled.input`
  height: 48px;
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 15px;
  top: 14px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
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
  transition: fill 0.3s ease;

  &:hover {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const SortWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  margin-bottom: 8px;
`;

export const SortText = styled.p`
  color: ${({ theme }) => theme.colors.grey_text};
  font-weight: 900;

  span:last-child {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Sort = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  label {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.grey_text};
    width: 100px;
    padding-left: 12px;
  }

  select {
    color: ${({ theme }) => theme.colors.black};
    border: none;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const SortSvg = styled.div`
  position: absolute;
  right: 11px;
  top: 11px;

  svg {
    width: 23px;
    height: 23px;
  }
`;
