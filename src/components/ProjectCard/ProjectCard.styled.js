import styled from "styled-components";

export const Thumb = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
  border-radius: 24px;
  padding: 24px;
  text-align: left;
  font-size: 16px;
  margin-bottom: 24px;

  @media (min-width: 767px) {
    padding: 32px;
  }
`;

export const SortWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grey_text};
`;

export const SpanDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.p3};
  font-weight: 500;

  span:first-child {
    display: none;
  }

  @media (min-width: 767px) {
    span:first-child {
      display: inline;
    }
  }
`;

export const Title = styled.h4`
  font-weight: 900;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.fontSize.h6};

  @media (min-width: 767px) {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.h5};
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 38px;
  margin-bottom: 32px;

  li:last-child {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  li:not(:first-child):not(:last-child) {
    display: none;
  }

  @media (min-width: 767px) {
    li:not(:first-child):not(:last-child) {
      display: flex;
    }

    li:last-child {
      display: none;
    }
  }
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.grey_bg};
  border-radius: 38px;
  padding: 6px 16px;
  font-size: ${({ theme }) => theme.fontSize.p3};
`;

export const Options = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Option = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: ${({ theme }) => theme.fontSize.p2};
  font-weight: 400;
  margin-bottom: 32px;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey_text};
  font-weight: 800;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Salary = styled.span`
  font-weight: 900;
`;

export const SeeMoreBtn = styled.button`
  padding: 12px 24px;
  margin-right: 8px;
  width: calc(100% - 56px);
  max-width: 300px;

  @media (min-width: 767px) {
    width: 125px;
  }
`;

export const FavoriteBtn = styled.button`
  background-color: transparent;
  border: transparent;
  color: transparent;
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: relative;
`;

export const HeatdIconSvg = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;

  &:hover {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
