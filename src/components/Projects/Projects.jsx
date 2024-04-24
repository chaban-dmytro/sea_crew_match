import { ProjectCard } from "../ProjectCard/ProjectCard";
import {
  Wrapper,
  SearchWrap,
  SearchInput,
  SearchBtn,
  SearchSvg,
  Tags,
  Tag,
  Button,
  Svg,
  SortWrap,
  SortText,
  Sort,
} from "./Projects.styled";
import sprite from "../../images/sptite.svg";
import { Pagination } from "../Pagination/Pagination";
import { Select } from "../Filter/Select/Select";
import { useSearchParams } from "react-router-dom";

export const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // for (const [key, value] of searchParams.entries()) {
  //   console.log(`${key}: ${value}`);
  // }
  const arrayTags = [];
  for (const value of searchParams.values()) {
    let array = [];
    if (value.length !== 0) {
      array = value.split(" ");
    }
    arrayTags.push(...array);
  }

  const toggleClick = (value) => {
    searchParams.forEach((param, name) => {
      if (param.includes(value)) {
        const aray = param.split(" ").filter((item) => item !== value);
        if (aray.length > 0) {
          searchParams.set(name, aray.join(" "));
        } else {
          searchParams.delete(name);
        }
        setSearchParams(searchParams);
      }
    });
  };
  return (
    <Wrapper>
      <SearchWrap>
        <SearchInput
          type="text"
          name="search"
          placeholder="Search by skills(e.g. “Fishing”)"
        />
        <SearchBtn type="button">
          <SearchSvg>
            <use href={sprite + "#icon-u_search"}></use>
          </SearchSvg>
        </SearchBtn>
      </SearchWrap>

      <Tags>
        {arrayTags.map((item) => (
          <Tag>
            <p>{item.replace("_", " ")}</p>
            <Button
              type="button"
              value={item}
              onClick={(evt) => {
                toggleClick(evt.currentTarget.value);
              }}
            >
              <Svg>
                <use href={sprite + "#icon-u_multiply"}></use>
              </Svg>
            </Button>
          </Tag>
        ))}
      </Tags>

      <SortWrap>
        <SortText>
          <span>38</span>
          <span> projects found for </span>
          <span>"Exapmle"</span>
        </SortText>
        <Sort>
          <label htmlFor="select">Sort by</label>
          <Select id="select" array={["Publication date", "Ratting"]} />
        </Sort>
      </SortWrap>
      <ul>
        <ProjectCard />
      </ul>
      <Pagination />
    </Wrapper>
  );
};
