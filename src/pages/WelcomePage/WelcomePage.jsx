import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import {
  Background,
  SectionHero,
  SectionFindSailor,
  ImgWrap,
  Text,
  Title,
  Features,
} from "./WelcomePage.styled";
import sprite from "../../images/sptite.svg";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <>
      <Background></Background>
      <Header />
      <div className="container">
        <SectionHero>
          <h3>Icelandic Horizons, Endless Potential</h3>
          <p>Where Companies and Sailors Meet. Begin Your Voyage!</p>
          <button type="button">
            <Link to="/projects">Get started</Link>
          </button>
        </SectionHero>
        <SectionFindSailor>
          <div>
            <Text>How it works.</Text>
            <Title>Find sailor and we'll do the rest</Title>
          </div>
          <ImgWrap>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              alt="img"
            />
          </ImgWrap>
          <ul>
            <li>
              <span>Create your project</span>
              <div>
                <svg>
                  <use href={sprite + "#icon-u_lightbulb-alt"}></use>
                </svg>
              </div>
              <span>Simple creation process</span>
            </li>
            <li>
              <span>Find the best sailor</span>
              <div>
                <svg>
                  <use href={sprite + "#icon-u_search-alt"}></use>
                </svg>
              </div>
              <span>Search by every related filter u need</span>
            </li>
            <li>
              <span>Sign agreement</span>
              <div>
                <svg>
                  <use href={sprite + "#icon-u_file-edit-alt"}></use>
                </svg>
              </div>
              <span>We`ll make papers for you, just edit it</span>
            </li>
            <li>
              <span>Leave review</span>
              <div>
                <svg>
                  <use href={sprite + "#icon-u_star"}></use>
                </svg>
              </div>
              <span>Let people know how it went</span>
            </li>
          </ul>
        </SectionFindSailor>
        <Features>
          <div>
            <Text>Features.</Text>
            <Title>More than just a marketplace</Title>
          </div>
          <ul>
            <li>
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  alt="img"
                />
              </div>
              <div>
                <h4>Calendar Integration</h4>
                <p>
                  As freelancer you can make your own schedule that'll be
                  displayed to companies. Update it anytime and receive offers
                  on the
                </p>
                <button>Try it now</button>
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  alt="img"
                />
              </div>
              <div>
                <h4>Legal agreement wizard</h4>
                <p>
                  As freelancer you can make your own schedule that'll be
                  displayed to companies. Update it anytime and receive offers
                  on the
                </p>
                <button>Try it now</button>
              </div>
            </li>
            <li>
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                  alt="img"
                />
              </div>
              <div>
                <h4>Reviews and Ratings</h4>
                <p>
                  As freelancer you can make your own schedule that'll be
                  displayed to companies. Update it anytime and receive offers
                  on the
                </p>
                <button>Try it now</button>
              </div>
            </li>
          </ul>
        </Features>
      </div>
      <Footer />
    </>
  );
};
