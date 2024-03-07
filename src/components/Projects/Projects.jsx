import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Wrapper, Search, Tags, Tag, SortWrap, Sort } from "./Projects.styled";

export const Projects = () => {
  return (
    <Wrapper>
      <Search type="text" name="search" />
      <Tags>
        <Tag>Martime</Tag>
        <Tag>Seafood Processing</Tag>
        <Tag>35-410 ISK / hour</Tag>
        <Tag>Navigation</Tag>
        <Tag>Deck Operations</Tag>
        <Tag>20-60 hours</Tag>
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
        <ProjectCard/>
      </ul>
    </Wrapper>
  );
};
