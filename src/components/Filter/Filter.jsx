import {
  FilterWrapper,
  FormTitle,
  Title,
  RestBtn,
  SubscribeBtn,
  FilterLink,
  InputSelectWrapper,
} from "./Filter.styled";
import sprite from "../../images/sptite.svg";
import { Range } from "./Range/Range";
import { Checkbox } from "./Checkbox/Checkbox";
import { Radio } from "./Radio/Radio";
import { FormDate } from "./Date/FormDate";
import { Select } from "./Select/Select";

export const Filter = () => {
  return (
    <FilterWrapper>
      <Title>Filter</Title>

      <form>
        <FormTitle>Project Category</FormTitle>
        <Checkbox
          array={[
            "Fishing",
            "Maritime",
            "Transportation",
            "Seafood Processing",
          ]}
        />
      </form>

      <form>
        <FormTitle>Project Type</FormTitle>
        <Radio array={["Houry", "Fixed-price"]} />
      </form>

      <div>
        <FormTitle>Hourly rate</FormTitle>
        <Range
          info={{
            min: 0,
            max: 600,
            valueMin: 35,
            valueMax: 410,
            units: "ISK",
          }}
        ></Range>
      </div>

      <InputSelectWrapper>
        <FormTitle>Location</FormTitle>
        <Select array={["Select city", "Reykjavik", "Kopavogur"]} />
      </InputSelectWrapper>

      <InputSelectWrapper>
        <FormTitle>Project starting date</FormTitle>
        <FormDate text="Select date or range" />
      </InputSelectWrapper>

      <InputSelectWrapper>
        <FormTitle>Publication date</FormTitle>
        <FormDate text="Select date" />
      </InputSelectWrapper>

      <form>
        <FormTitle>Skills</FormTitle>
        <Checkbox
          array={[
            "Navigation",
            "Deck Operations",
            "Seafood Handling",
            "Navigation",
            "Deck Operations",
            "Seafood Handling",
          ]}
        />
      </form>

      <div>
        <FormTitle>Duration</FormTitle>
        <Range
          info={{
            min: 0,
            max: 90,
            valueMin: 20,
            valueMax: 60,
            units: "hrs",
          }}
        ></Range>
      </div>

      <div>
        <RestBtn type="button">Reset filters</RestBtn>
        <SubscribeBtn type="button">
          <span>
            <svg>
              <use href={sprite + "#icon-u_heart-alt"}></use>
            </svg>
          </span>
          <span>Subscribe</span>
        </SubscribeBtn>
        <FilterLink href="./index.html">
          Get updates about new project related to these filters
        </FilterLink>
      </div>
    </FilterWrapper>
  );
};
