import Logo from "../../images/logo.svg";
import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  LogoImg,
  HeaderLogoText,
  HeaderItems,
  HeaderWrap,
  HeaderButtonLang,
  HeaderBtn,
  SearchIconSvg,
  PostBtn,
} from "./Header.styled";
import sprite from "../../images/sptite.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderLogo href="./index.html">
          <LogoImg src={Logo} alt="Logo" />
          <HeaderLogoText>SeaCrewMatch</HeaderLogoText>
        </HeaderLogo>
        <HeaderItems>
          <li>
            <a href="./index.html">Find Sailors</a>
          </li>
          <li>
            <a href="./index.html">Find a project</a>
          </li>
          <li>
            <a href="./index.html">How it works</a>
          </li>
          <li>
            <a href="./index.html">Support</a>
          </li>
        </HeaderItems>
      </HeaderNav>
      <HeaderWrap>
        <HeaderButtonLang type="button" active>
          EN
        </HeaderButtonLang>
        <HeaderButtonLang type="button">ISL</HeaderButtonLang>
        <HeaderBtn type="button">
          <SearchIconSvg>
            <use href={sprite + "#icon-u_search"}></use>
          </SearchIconSvg>
        </HeaderBtn>
        <HeaderBtn type="button">
          <SearchIconSvg>
            <use href={sprite + "#icon-u_user-circle"}></use>
          </SearchIconSvg>
        </HeaderBtn>
        <PostBtn type="button">Post a project</PostBtn>
      </HeaderWrap>
    </HeaderContainer>
  );
};
