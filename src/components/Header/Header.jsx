import { LuSearch } from "react-icons/lu";
import { LuUserCircle2 } from "react-icons/lu";
// import Logo from "../../images/logo.svg";
import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  HeaderLogoText,
  HeaderItems,
  HeaderWrap,
  HeaderButtonLang,
  HeaderItem,
} from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderLogo href="./index.html">
          <span></span>
          <HeaderLogoText>SeaCrewMatch</HeaderLogoText>
        </HeaderLogo>
        <HeaderItems class="menu-items list">
          <HeaderItem class="menu-item">
            <a class="menu-link" href="./index.html">
              Find Sailors
            </a>
          </HeaderItem>
          <HeaderItem class="menu-item">
            <a class="menu-link" href="./index.html">
              Find a project
            </a>
          </HeaderItem>
          <HeaderItem class="menu-item">
            <a class="menu-link" href="./index.html">
              How it works
            </a>
          </HeaderItem>
          <HeaderItem class="menu-item">
            <a class="menu-link" href="./index.html">
              Support
            </a>
          </HeaderItem>
        </HeaderItems>
      </HeaderNav>
      <HeaderWrap className="wrapper">
        <HeaderButtonLang type="button">EN</HeaderButtonLang>
        <HeaderButtonLang type="button">ISL</HeaderButtonLang>
        <button type="button">
          <LuSearch />
        </button>
        <button type="button">
          <LuUserCircle2 />
        </button>
        <button type="button">Post a project</button>
      </HeaderWrap>
    </HeaderContainer>
  );
};
