import { FormRadio } from "./Radio.styled";

export const Radio = ({ array }) => {
  return (
    <FormRadio>
      {array.map((item) => (
        <li key={item.index}>
          <label>
            <input type="radio" name="project_type" value="Hourly" />
            <span></span>
            {item}
          </label>
        </li>
      ))}
    </FormRadio>
  );
};
