import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Background, Section } from "./WelcomePage.styled";

export const WelcomePage = () => {
  return (
    <>
      <Background></Background>
      <Header />
      <div className="container">
        <Section>
          <h3>Icelandic Horizons, Endless Potential</h3>
          <p>Where Companies and Sailors Meet. Begin Your Voyage!</p>
          <button type="button">Get started</button>
        </Section>
      </div>
      <Footer />
    </>
  );
};
