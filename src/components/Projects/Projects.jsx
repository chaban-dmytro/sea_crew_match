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

export const Projects = () => {
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
        <Tag>
          <p>Martime</p>
          <Button type="button">
            <Svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </Svg>
          </Button>
        </Tag>
        <Tag>
          <p>Seafood Processing</p>
          <Button type="button">
            <Svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </Svg>
          </Button>
        </Tag>
        <Tag>
          <p>35-410 ISK / hour</p>
          <Button type="button">
            <Svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </Svg>
          </Button>
        </Tag>
        <Tag>
          <p>Navigation</p>
          <Button type="button">
            <Svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </Svg>
          </Button>
        </Tag>
        <Tag>
          <p>Deck Operations</p>
          <Button type="button">
            <Svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </Svg>
          </Button>
        </Tag>
        <Tag>
          <p>20-60 hours</p>
          <Button type="button">
            <Svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </Svg>
          </Button>
        </Tag>
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
      <Pagination />
    </Wrapper>
  );
};
