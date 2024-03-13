import { ProjectCard } from "../ProjectCard/ProjectCard";
import {
  Wrapper,
  Search,
  Tags,
  Tag,
  Button,
  Svg,
  SortWrap,
  Sort,
} from "./Projects.styled";
import sprite from "../../images/sptite.svg";

export const Projects = () => {
  return (
    <Wrapper>
      <Search type="text" name="search" />
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
        <p>
          <span>38</span>
          <span> projects found for </span>
          <span>"Exapmle"</span>
        </p>
        <Sort>
          <label for="sort">Sort by</label>
          <select id="sort" name="sort">
            <option value="date">Publication date</option>
            <option value="rate">Ratting</option>
          </select>
        </Sort>
      </SortWrap>
      <ul>
        <ProjectCard />
      </ul>
    </Wrapper>
  );
};
