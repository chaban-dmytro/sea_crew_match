import ReactSlider from "react-slider";
import { useState } from "react";

import { Wrapper, InputWrapper } from "./Range.styled";

export const Range = ({ info }) => {
  const { min, max, valueMin, valueMax, units } = info;

  const [value, setValue] = useState([valueMin, valueMax]);

  const handleInputChange = (e, index) => {
    const newValue = [...value];
    newValue[index] = parseInt(e.target.value);
    setValue(newValue);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="first" id="first-slider-label">
          <span>{units}</span>
          <input
            type="number"
            name="first"
            id="first"
            maxLength="4"
            value={value[0]}
            onChange={(e) => handleInputChange(e, 0)}
          />
        </label>
        <span>-</span>
        <label htmlFor="second" id="second-slider-label">
          <span>{units}</span>
          <input
            type="number"
            name="second"
            id="second"
            maxLength="4"
            value={value[1]}
            onChange={(e) => handleInputChange(e, 1)}
          />
        </label>
      </InputWrapper>

      <ReactSlider
        value={value}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[value[0], value[1]]}
        max={max}
        min={min}
        ariaLabelledby={["first-slider-label", "second-slider-label"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value, index) => setValue(value)}
        pearling
        minDistance={10}
      />
    </Wrapper>
  );
};
