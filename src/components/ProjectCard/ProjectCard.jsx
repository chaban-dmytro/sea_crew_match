import { Thumb, SortWrap, Title } from "./ProjectCard.styled";

export const ProjectCard = () => {
  return (
    <Thumb>
      <SortWrap>
        <span>Transportation</span>
        <span>
          Published <span>3</span> ago
        </span>
      </SortWrap>
      <Title>Whale hunting in the middle of nowhere</Title>
      <p>
        As freelancer you can make your own schedule that all be displayed to
        companies. Update it anytime and receive offers on the days you are free
        As freelancer you can make
      </p>
      <ul>
        <li>Navigation</li>
        <li>Seafood Processing</li>
        <li>Deck Operations</li>
      </ul>
      <ul>
        <li>
          <span>Experience</span>
          <span>3-5 years</span>
        </li>
        <li>
          <span>Duration</span>
          <span>60 days</span>
        </li>
        <li>
          <span>Schedule</span>
          <span>Flexible</span>
        </li>
        <li>
          <span>Location</span>
          <span>Akureyri</span>
        </li>
      </ul>
    </Thumb>
  );
};
