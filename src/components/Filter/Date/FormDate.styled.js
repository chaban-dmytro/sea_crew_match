import styled from "styled-components";

export const DateWrapper = styled.div`
  position: relative;

  label {
    .react-datepicker-wrapper {
      width: 100%;
    }

    .react-datepicker {
      font-family: "Red Hat Display", sans-serif;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
    }

    .react-datepicker__header {
      text-align: center;
      background-color: ${({ theme }) => theme.colors.primary};
      border-bottom: 1px solid #aeaeae;
      border-top-left-radius: 0.3rem;
      padding: 8px 0;
      position: relative;
    }

    .react-datepicker__navigation-icon--next::before {
      left: 0;
    }

    span {
      position: absolute;
      width: 25px;
      height: 25px;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);

      svg {
        width: 30px;
        height: 30px;
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
