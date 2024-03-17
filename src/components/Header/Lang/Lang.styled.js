import styled from "styled-components";

export const HeaderButtonLang = styled.button`
  display: none;

  @media (min-width: 767px) {
    display: block;
    border: none;
    cursor: pointer;
    background: transparent;
    color: ${({ theme, active }) => {
      if (active) {
        return theme.colors.black;
      } else {
        return theme.colors.grey_text;
      }
    }};
  }
`;
