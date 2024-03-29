import { Wrapper, SliderNav, Item, ButtonsWrap } from "./Sliders.styled";
import sprite from "../../images/sptite.svg";
import userImg from "../../images/user/user-logo-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const SliderCard = () => {
  const userCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Wrapper>
      <Swiper
        className="cards_swiper"
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        centered-slides="true"
        breakpoints={{
          767: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1120: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {userCards.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Item>
                <div>
                  <span>
                    <img src={userImg} alt="user-img" />
                  </span>
                  <span>
                    <h5>Michael W.</h5>
                    <p>12 y. of experience</p>
                  </span>
                </div>
                <p>
                  Versatility defines my capabilities - from managing
                  transportation logistics to executing successful fishing
                  operations.
                </p>
                <ul>
                  <li>
                    <span>begin at</span>
                    <span>90.00</span>
                    <span>ISK / hour</span>
                  </li>
                  <li>
                    <span>rating</span>
                    <span>4.79</span>
                    <span>/ 5</span>
                  </li>
                  <li>
                    <span>orders</span>
                    <span>164</span>
                    <span>done</span>
                  </li>
                </ul>
                <ButtonsWrap>
                  <button type="button">Hire me</button>
                  <button type="button">
                    <svg>
                      <use href={sprite + "#icon-message"}></use>
                    </svg>
                  </button>
                  <button type="button">
                    <svg>
                      <use href={sprite + "#icon-u_heart-alt"}></use>
                    </svg>
                  </button>
                </ButtonsWrap>
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderNav>
        <button className="prev">
          <svg>
            <use href={sprite + "#icon-u_arrow-left"}></use>
          </svg>
        </button>
        <button className="next">
          <svg>
            <use href={sprite + "#icon-u_arrow-right"}></use>
          </svg>
        </button>
      </SliderNav>
    </Wrapper>
  );
};
