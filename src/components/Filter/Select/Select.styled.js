import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;

  select {
    appearance: none;
  }
  select::-webkit-select {
    appearance: none;
  }
  select::-moz-select {
    appearance: none;
  }
  select::-ms-select {
    appearance: none;
  }

  span {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    pointer-events: none;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
