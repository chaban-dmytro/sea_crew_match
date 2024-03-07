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
  border-radius: 8px;
  border: 1px solid tomato;
  padding: 6px 40px 6px 16px;
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
