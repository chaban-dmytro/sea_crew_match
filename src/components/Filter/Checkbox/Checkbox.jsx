import { FormCheckbox } from "./Checkbox.styled";
import sprite from "../../../images/sptite.svg";

export const Checkbox = ({ array }) => {
  return (
    <FormCheckbox>
      {array.map((item) => (
        <li key={item.index}>
          <label>
            <input type="checkbox" name={item} value={item} />
            <span>
              <svg>
                <use href={sprite + "#icon-u_check"}></use>
              </svg>
            </span>
            {item}
          </label>
        </li>
      ))}
    </FormCheckbox>
  );
};
