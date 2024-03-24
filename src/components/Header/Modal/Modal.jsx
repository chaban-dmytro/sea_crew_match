import {
  Container,
  Overlay,
  Wrapper,
  ModalHead,
  LogoLink,
  ButtonsWrap,
  Btn,
} from "./Modal.styled";
import Logo from "../../../images/logo.svg";
import sprite from "../../../images/sptite.svg";
import { Lang } from "../Lang/Lang";
import { Navigation } from "../Navigation.jsx/Navigation";

export const Modal = ({ onClose, isModalOpen }) => {
  return (
    <Container>
      <Overlay onClick={onClose} isModalOpen={isModalOpen}></Overlay>
      <Wrapper isModalOpen={isModalOpen}>
        <ModalHead>
          <LogoLink href="./index.html">
            <img src={Logo} alt="Logo" />
            <span>SeaCrewMatch</span>
          </LogoLink>
          <button type="button" onClick={onClose}>
            <svg>
              <use href={sprite + "#icon-u_multiply"}></use>
            </svg>
          </button>
        </ModalHead>
        <div>
          <Navigation />
        </div>
        <ButtonsWrap>
          <div>
            <Lang />
          </div>
          <Btn type="button">Sign Up</Btn>
          <Btn type="button" className="white">
            Log In
          </Btn>
        </ButtonsWrap>
      </Wrapper>
    </Container>
  );
};
