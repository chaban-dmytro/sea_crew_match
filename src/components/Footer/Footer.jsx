import Logo from "../../images/logo.svg";
import {
  FooterContainer,
  FooterLogo,
  LogoImg,
  FooterLogoText,
  Privacy,
  SocialItems,
  SocialItem,
  FooterNav,
  FooterAddress,
} from "./Footer.styled";
import sprite from "../../images/sptite.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterLogo href="./index.html">
          <LogoImg src={Logo} alt="Logo" />
          <FooterLogoText>SeaCrewMatch</FooterLogoText>
        </FooterLogo>
        <Privacy>
          <a href=".index.html">Terms of Service</a>
          <a href=".index.html">Privacy Policy</a>
        </Privacy>
        <SocialItems>
          <SocialItem>
            <svg>
              <use href={sprite + "#icon-Facebook---Negative"}></use>
            </svg>
          </SocialItem>
          <SocialItem>
            <svg>
              <use href={sprite + "#icon-Instagram---Negative"}></use>
            </svg>
          </SocialItem>
          <SocialItem>
            <svg>
              <use href={sprite + "#icon-X"}></use>
            </svg>
          </SocialItem>
          <SocialItem>
            <svg>
              <use href={sprite + "#icon-Facebook---Negative"}></use>
            </svg>
          </SocialItem>
        </SocialItems>
      </div>

      <FooterNav>
        <p>Explore</p>
        <ul>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./index.html">FAQ</a>
          </li>
          <li>
            <a href="./index.html">Support</a>
          </li>
        </ul>
      </FooterNav>

      <FooterAddress>
        <p>Contacts</p>
        <ul>
          <li>
            <a href="tel:+354 123 456">+354 123 456</a>
            <span>9:00 - 18:00 every day</span>
          </li>
          <li>
            <a href="mailto:support@seacrewmatch.com">
              support@seacrewmatch.com
            </a>
            <span>7 days / week</span>
          </li>
        </ul>
      </FooterAddress>
    </FooterContainer>
  );
};
