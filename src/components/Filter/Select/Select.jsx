import { SelectWrapper } from "./Select.styled";
import sprite from "../../../images/sptite.svg";

export const Select = ({ array }) => {
  return (
    <SelectWrapper>
      <select>
        {array.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <span>
        <svg>
          <use href={sprite + "#icon-u_angle-down"}></use>
        </svg>
      </span>
    </SelectWrapper>
  );
};
