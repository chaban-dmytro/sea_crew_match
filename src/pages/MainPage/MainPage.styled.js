import styled from "styled-components";

export const Title = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: 900;
  margin-bottom: 56px;

  @media (min-width: 767px) {
    padding-top: 96px;
    margin-bottom: 72px;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 767px) {
    display: flex;
    gap: 56px;
  }
`;

export const FilterWrap = styled.div`
  display: none;

  @media (min-width: 767px) {
    display: flex;
    max-width: 262px;
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 56px;
`;
