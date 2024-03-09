import {
  Thumb,
  SortWrap,
  Title,
  Text,
  Tags,
  Item,
  Options,
  Option,
  Name,
  Wrap,
  Salary,
  SeeMoreBtn,
  FavoriteBtn,
  HeatdIconSvg,
} from "./ProjectCard.styled";
import sprite from "../../images/sptite.svg";

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
      <Text>
        As freelancer you can make your own schedule that all be displayed to
        companies. Update it anytime and receive offers on the days you are free
        As freelancer you can make
      </Text>
      <Tags>
        <Item>Navigation</Item>
        <Item>Seafood Processing</Item>
        <Item>Deck Operations</Item>
      </Tags>
      <Options>
        <Option>
          <Name>Experience</Name>
          <span>3-5 years</span>
        </Option>
        <Option>
          <Name>Duration</Name>
          <span>60 days</span>
        </Option>
        <Option>
          <Name>Schedule</Name>
          <span>Flexible</span>
        </Option>
        <Option>
          <Name>Location</Name>
          <span>Akureyri</span>
        </Option>
      </Options>
      <Wrap>
        <Salary>
          <span>20.00</span> ISK / hour
        </Salary>
        <span>
          <SeeMoreBtn type="button">See more</SeeMoreBtn>
          <FavoriteBtn type="button">
            Favorite
            <HeatdIconSvg>
              <use href={sprite + "#icon-u_heart-alt"}></use>
            </HeatdIconSvg>
          </FavoriteBtn>
        </span>
      </Wrap>
    </Thumb>
  );
};
