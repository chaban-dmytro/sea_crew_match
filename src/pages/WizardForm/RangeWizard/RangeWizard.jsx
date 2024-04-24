import ReactSlider from "react-slider";
import { useState } from "react";
import { Wrapper, InputWrapper } from "./RangeWiard";
import { Field } from "formik";

export const RangeWizard = ({ info }) => {
  const { min, max, valueMin, valueMax, units } = info;
  const [value, setValue] = useState([valueMin, valueMax]);

  // const handleInputChange = (e, index) => {
  //   console.log(e.target.value);
  //   const newValue = [...value];
  //   newValue[index] = parseInt(e.target.value);
  //   setValue(newValue);
  // };

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="experienceMin" id="first-slider-label">
          <span>{units}</span>
          <Field
            type="number"
            name="experienceMin"
            id="first"
            maxLength="4"
            // value={value[0]}
            // onChange={(e) => handleInputChange(e, 0)}
          />
        </label>
        <span>-</span>
        <label htmlFor="experienceMax" id="second-slider-label">
          <span>{units}</span>
          <Field
            type="number"
            name="experienceMax"
            id="second"
            maxLength="4"
            // value={value[1]}
            // onChange={(e) => handleInputChange(e, 1)}
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
        minDistance={1}
      />
    </Wrapper>
  );
};
