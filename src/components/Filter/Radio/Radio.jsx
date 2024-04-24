import { FormRadio } from "./Radio.styled";
import { useSearchParams } from "react-router-dom";

export const Radio = ({ array, nameForm }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.getAll(nameForm);

  const changeFilters = (value) => {
    searchParams.set(nameForm, value);
    setSearchParams(searchParams);
  };

  return (
    <FormRadio>
      {array.map((item, index) => (
        <li key={index}>
          <label>
            <input
              type="radio"
              value={item.toLowerCase().replace(" ", "_")}
              name={array[0]}
              onChange={(evt) => {
                changeFilters(evt.target.value);
              }}
              checked={currentValue.includes(
                item.toLowerCase().replace(" ", "_")
              )}
            />
            <span></span>
            {item}
          </label>
        </li>
      ))}
    </FormRadio>
  );
};
