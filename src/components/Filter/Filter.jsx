import { FilterWrapper, FormTitle } from "./Filter.styled";

export const Filter = () => {
  return (
    <FilterWrapper>
      <h3>Filter</h3>
      <form>
        <FormTitle>Project Category</FormTitle>
        <label>
          <input type="checkbox" name="fishing" value="fishing" />
          Fishing
        </label>
        <label>
          <input type="checkbox" name="maritime " value="maritime" />
          Maritime
        </label>
        <label>
          <input type="checkbox" name="transportation" value="transportation" />
          Transportation
        </label>
        <label>
          <input type="checkbox" name="seafood" value="seafood" />
          Seafood Processing
        </label>
      </form>

      <form>
        <FormTitle>Project Type</FormTitle>
        <label>
          <input type="radio" name="project_type" value="Hourly" />
          Hourly
        </label>
        <label>
          <input type="radio" name="project_type" value="Fixed-price" />
          Fixed-price
        </label>
      </form>

      <form>
        <FormTitle for="range">Hourly rate</FormTitle>
        <input
          type="text"
          id="sliderValue"
          name="sliderValue"
          value="50"
        ></input>
        <input type="range" id="range" min="0" max="100" value="50" step="1" />
      </form>

      <form>
        <FormTitle for="location">Location</FormTitle>
        <select id="location" name="location">
          <option value="select">Select city</option>
          <option value="reykjavik">Reykjavik</option>
          <option value="kopavogur ">Kopavogur</option>
        </select>
        <label for="starting_date">Project starting date</label>
        <select id="starting_date" name="date"></select>
        <label for="publication_date">Publication date</label>
        <select id="publication_date" name="date"></select>
      </form>

      <form>
        <FormTitle>Skills</FormTitle>
        <label>
          <input type="checkbox" name="navigation" value="navigation" />
          Navigation
        </label>
        <label>
          <input
            type="checkbox"
            name="deck_operations "
            value="deck_operations"
          />
          Deck Operations
        </label>
        <label>
          <input
            type="checkbox"
            name="seafood_handling"
            value="seafood_handling"
          />
          Seafood Handling
        </label>
        <label>
          <input type="checkbox" name="navigation" value="navigation" />
          Navigation
        </label>
        <label>
          <input
            type="checkbox"
            name="deck_operations "
            value="deck_operations"
          />
          Deck Operations
        </label>
        <label>
          <input
            type="checkbox"
            name="seafood_handling"
            value="seafood_handling"
          />
          Seafood Handling
        </label>
      </form>

      <form>
        <FormTitle for="range">Duration</FormTitle>
        <input
          type="text"
          id="sliderValue"
          name="sliderValue"
          value="20"
        ></input>
        <input
          type="text"
          id="sliderValue"
          name="sliderValue"
          value="60"
        ></input>
        <input type="range" id="range" min="0" max="100" value="50" step="1" />
      </form>
    </FilterWrapper>
  );
};
