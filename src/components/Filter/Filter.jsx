import {
  FilterWrapper,
  FormTitle,
  Title,
  FormCheckbox,
  FormCheckInput,
  FormCheckSpan,
  FormCheckLabel,
  FormCheckSvg,
  FormRadio,
  FormRadioLabel,
  FormRadioInput,
  FormRadioSpan,
  FormRange,
  FormLabel,
  FormDate,
  RestBtn,
  SubscribeBtn,
  FilterLink,
} from "./Filter.styled";
import sprite from "../../images/sptite.svg";

export const Filter = () => {
  return (
    <FilterWrapper>
      <Title>Filter</Title>
      <FormCheckbox>
        <FormTitle>Project Category</FormTitle>
        <FormCheckLabel>
          <FormCheckInput type="checkbox" name="fishing" value="fishing" />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Fishing
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput type="checkbox" name="maritime " value="maritime" />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Maritime
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="transportation"
            value="transportation"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Transportation
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput type="checkbox" name="seafood" value="seafood" />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Seafood Processing
        </FormCheckLabel>
      </FormCheckbox>

      <FormRadio>
        <FormTitle>Project Type</FormTitle>
        <FormRadioLabel>
          <FormRadioInput
            type="radio"
            name="project_type"
            value="Hourly"
            checked
          />
          <FormRadioSpan></FormRadioSpan>
          Hourly
        </FormRadioLabel>
        <FormRadioLabel>
          <FormRadioInput
            type="radio"
            name="project_type"
            value="Fixed-price"
          />
          <FormRadioSpan></FormRadioSpan>
          Fixed-price
        </FormRadioLabel>
      </FormRadio>

      <FormRange>
        <FormTitle>Hourly rate</FormTitle>
        <input
          type="text"
          id="sliderValue"
          name="sliderValue"
          value="50"
        ></input>
        <input type="range" id="range" min="0" max="100" value="50" step="1" />
      </FormRange>

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

      <FormCheckbox>
        <FormTitle>Skills</FormTitle>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="navigation"
            value="navigation"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Navigation
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="deck_operations "
            value="deck_operations"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Deck Operations
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="seafood_handling"
            value="seafood_handling"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Seafood Handling
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="navigation"
            value="navigation"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Navigation
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="deck_operations "
            value="deck_operations"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Deck Operations
        </FormCheckLabel>
        <FormCheckLabel>
          <FormCheckInput
            type="checkbox"
            name="seafood_handling"
            value="seafood_handling"
          />
          <FormCheckSpan>
            <FormCheckSvg>
              <use href={sprite + "#icon-u_check"}></use>
            </FormCheckSvg>
          </FormCheckSpan>
          Seafood Handling
        </FormCheckLabel>
      </FormCheckbox>

      <FormRange>
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
      </FormRange>

      {/* <div>
        <div className="field">
          <span>Min</span>
          <input className="input-min" type="number" value="20" />
        </div>
        <div>-</div>
        <div className="field">
          <span>Max</span>
          <input className="input-max" type="number" value="60" />
        </div>
      </div> */}

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
