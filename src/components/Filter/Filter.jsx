import {
  FilterWrapper,
  FormTitle,
  Title,
  FormLabel,
  FormDate,
  RestBtn,
  SubscribeBtn,
  FilterLink,
} from "./Filter.styled";
import { Range } from "./Range/Range";
import { Checkbox } from "./Checkbox/Checkbox";
import { Radio } from "./Radio/Ragio";

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

      <FormDate>
        <FormTitle for="location">Location</FormTitle>
        <select id="location" name="location">
          <option value="select">Select city</option>
          <option value="reykjavik">Reykjavik</option>
          <option value="kopavogur ">Kopavogur</option>
        </select>
        <FormLabel for="starting_date">Project starting date</FormLabel>
        <input
          id="starting_date"
          name="date"
          type="date"
          placeholder="Select date or range"
        ></input>
        <FormLabel for="publication_date">Publication date</FormLabel>
        <input
          id="publication_date"
          name="date"
          type="date"
          placeholder="Select date"
        ></input>
      </FormDate>

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
        <SubscribeBtn type="button">Subscribe</SubscribeBtn>
        <FilterLink href="./index.html">
          Get updates about new project related to these filters
        </FilterLink>
      </div>
    </FilterWrapper>
  );
};
