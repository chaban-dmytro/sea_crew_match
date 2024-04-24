import {
  Thumb,
  SortWrap,
  SpanDate,
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
// import { useSearchParams } from "react-router-dom";
import { projectsArray } from "../Projects/projectsData";

export const ProjectCard = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // let arrayTags = {};
  // let newArray = [];

  // for (const [key, value] of searchParams.entries()) {
  //   if (value.length !== 0) {
  //     arrayTags[key] = value;
  //   }
  // }

  // const keys = Object.keys(arrayTags);

  // const chekByInfo = (obj) => {
  //   const filteredArray = projectsArray.filter((item) =>
  //     Object.entries(obj).every(([key, value]) => {
  //       if (Array.isArray(value)) {
  //         return value.every((skill) => item.skills.includes(skill));
  //       } else {
  //         return item[key] === value;
  //       }
  //     })
  //   );
  //   return filteredArray;
  // };

  // console.log(
  //   chekByInfo({
  //     skills: ["other"],
  //   })
  // );

  // const checkInArray = (key, value) => {
  //   const array = projectsArray.filter((item) => item[key].includes(value));
  //   newArray = [...array];
  //   return;
  // };

  // if (keys.length !== 0) {
  //   newArray = [];
  //   keys.forEach((key) => {
  //     const values = arrayTags[key].split(" ");
  //     values.map((value) => {
  //       checkInArray(key, value);
  //     });
  //   });
  // } else {
  //   newArray = projectsArray;
  // }

  return (
    <>
      {projectsArray.map((item) => (
        <Thumb>
          <SortWrap>
            <span>Transportation</span>
            <SpanDate>
              <span>Published </span>
              <span>3d</span>
              <span> ago</span>
            </SpanDate>
          </SortWrap>
          <Title>{item.name}</Title>
          <Text>{item.descr}</Text>
          <Tags>
            <Item>{item.category}</Item>
            <Item>+3</Item>
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
      ))}
    </>

    // <Thumb>
    //   <SortWrap>
    //     <span>Transportation</span>
    //     <SpanDate>
    //       <span>Published </span>
    //       <span>3d</span>
    //       <span> ago</span>
    //     </SpanDate>
    //   </SortWrap>
    //   <Title>Whale hunting in the middle of nowhere</Title>
    //   <Text>
    //     As freelancer you can make your own schedule that all be displayed to
    //     companies. Update it anytime and receive offers on the days you are free
    //     As freelancer you can make
    //   </Text>
    //   <Tags>
    //     <Item>Navigation</Item>
    //     <Item>Seafood Processing</Item>
    //     <Item>Deck Operations</Item>
    //     <Item>+3</Item>
    //   </Tags>
    //   <Options>
    //     <Option>
    //       <Name>Experience</Name>
    //       <span>3-5 years</span>
    //     </Option>
    //     <Option>
    //       <Name>Duration</Name>
    //       <span>60 days</span>
    //     </Option>
    //     <Option>
    //       <Name>Schedule</Name>
    //       <span>Flexible</span>
    //     </Option>
    //     <Option>
    //       <Name>Location</Name>
    //       <span>Akureyri</span>
    //     </Option>
    //   </Options>
    //   <Wrap>
    //     <Salary>
    //       <span>20.00</span> ISK / hour
    //     </Salary>
    //     <span>
    //       <SeeMoreBtn type="button">See more</SeeMoreBtn>
    //       <FavoriteBtn type="button">
    //         Favorite
    //         <HeatdIconSvg>
    //           <use href={sprite + "#icon-u_heart-alt"}></use>
    //         </HeatdIconSvg>
    //       </FavoriteBtn>
    //     </span>
    //   </Wrap>
    // </Thumb>
  );
};
