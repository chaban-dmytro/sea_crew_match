import styled from "styled-components";

export const Thumb = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey_stroke};
  border-radius: 24px;
  padding: 32px;
  text-align: left;
  font-size: 16px;
`;

export const SortWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.grey_text};
`;

export const Title = styled.h4`
  font-weight: 900;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-weight: 400;
  margin-bottom: 32px;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 38px;
  margin-bottom: 32px;
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
  justify-content: space-between;
  align-items: center;
`;

export const Salary = styled.span`
  font-weight: 900;
`;

export const SeeMoreBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.p2};
  background-color: ${({ theme }) => theme.colors.primary};
  border: transparent;
  border-radius: 8px;
  padding: 12px 24px;
  margin-right: 8px;
`;
