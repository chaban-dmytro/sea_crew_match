import { useState } from "react";
import Logo from "../../images/logo.svg";
import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  LogoImg,
  HeaderLogoText,
  HeaderWrap,
  HeaderBtn,
  SearchIconSvg,
  PostBtn,
  BurgerBtn,
} from "./Header.styled";
import sprite from "../../images/sptite.svg";
import { Navigation } from "./Navigation.jsx/Navigation";
import { Lang } from "./Lang/Lang";
import { Modal } from "./Modal/Modal";
import { Link } from "react-router-dom";

export const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <Modal onClose={toggleModal} isModalOpen={modal} />
      <HeaderContainer>
        <HeaderNav>
          <Link to="/">
            <HeaderLogo to="/">
              <LogoImg src={Logo} alt="Logo" />
              <HeaderLogoText>SeaCrewMatch</HeaderLogoText>
            </HeaderLogo>
          </Link>
          <Navigation />
        </HeaderNav>
        <HeaderWrap>
          <div>
            <Lang></Lang>
          </div>
          <HeaderBtn type="button">
            <SearchIconSvg>
              <use href={sprite + "#icon-u_search"}></use>
            </SearchIconSvg>
          </HeaderBtn>
          <HeaderBtn type="button" user>
            <SearchIconSvg>
              <use href={sprite + "#icon-u_user-circle"}></use>
            </SearchIconSvg>
          </HeaderBtn>
          <PostBtn type="button">Post a project</PostBtn>
          <BurgerBtn type="button" onClick={toggleModal}>
            <svg>
              <use href={sprite + "#icon-u_hamburger-menu"}></use>
            </svg>
          </BurgerBtn>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};
