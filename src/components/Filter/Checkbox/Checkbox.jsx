import { FormCheckbox } from "./Checkbox.styled";
import sprite from "../../../images/sptite.svg";
import { useSearchParams } from "react-router-dom";

export const Checkbox = ({ array, nameForm }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const arrayParams = [];
  for (const value of searchParams.values()) {
    const array = value.split(" ");
    arrayParams.push(...array);
  }

  const changeFilters = (value) => {
    const params = searchParams.getAll(nameForm);
    let values = [];
    if (params.length > 0) {
      values = params.join(" ").split(" ");
    }
    const index = values.indexOf(value);
    index === -1 ? values.push(value) : values.splice(index, 1);

    values.length === 0
      ? searchParams.delete(nameForm)
      : searchParams.set(nameForm, values.join(" "));
    setSearchParams(searchParams);
  };

  return (
    <FormCheckbox
      onChange={(evt) => {
        changeFilters(evt.target.value);
      }}
    >
      {array.map((item) => (
        <li key={item.index}>
          <label>
            <input
              type="checkbox"
              name={item}
              value={item.toLowerCase().replace(" ", "_")}
              // value={item.toLowerCase().split(" ")[0]}
              checked={arrayParams.includes(
                item.toLowerCase().replace(" ", "_")
              )}
            />
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
