import {
  Container,
  Overlay,
  Wrapper,
  ModalHead,
  LogoLink,
  Items,
} from "./Modal.styled";
import Logo from "../../../images/logo.svg";
import sprite from "../../../images/sptite.svg";
import { Lang } from "../Lang/Lang";

export const Modal = ({ onClose }) => {
  return (
    <Container>
      <Overlay onClick={onClose}></Overlay>
      <Wrapper>
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
        <nav>
          <Items>
            <li>
              {/* <Link>Find Sailors</Link> */}
              <a href="./index.html">Find Sailors</a>
            </li>
            <li>
              {/* <Link>Find a project</Link> */}
              <a href="./index.html">Find a project</a>
            </li>
            <li>
              <a href="./index.html">How it works</a>
            </li>
            <li>
              {/* <Link>Support</Link> */}
              <a href="./index.html">Support</a>
            </li>
          </Items>
        </nav>
        <Lang />
      </Wrapper>
    </Container>
  );
};
