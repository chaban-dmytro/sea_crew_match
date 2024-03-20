import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px 72px 16px;

  @media (min-width: 767px) {
    max-width: 1120px;
    padding: 0 10px 96px;
  }
`;

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
