import { FormRadio } from "./Radio.styled";

export const Radio = ({ array }) => {
  return (
    <FormRadio>
      {array.map((item, index) => (
        <li key={index}>
          <label>
            <input type="radio" value={item} name={array[0]} />
            <span></span>
            {item}
          </label>
        </li>
      ))}
    </FormRadio>
  );
};
