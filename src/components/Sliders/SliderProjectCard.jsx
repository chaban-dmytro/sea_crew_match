import { Wrapper, SliderNav, Item } from "./SliderProjectCadr.styled";
import sprite from "../../images/sptite.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const SliderProjectCard = () => {
  const projectCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Wrapper className="project_cards_wrapper">
      <Swiper
        className="project_cards_swiper"
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".project_cards_next",
          prevEl: ".project_cards_prev",
        }}
        centered-slides="true"
        breakpoints={{
          1120: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
      >
        {projectCards.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Item>
                <ProjectCard />
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderNav>
        <button className="project_cards_prev">
          <svg>
            <use href={sprite + "#icon-u_arrow-left"}></use>
          </svg>
        </button>
        <button className="project_cards_next">
          <svg>
            <use href={sprite + "#icon-u_arrow-right"}></use>
          </svg>
        </button>
      </SliderNav>
    </Wrapper>
  );
};
