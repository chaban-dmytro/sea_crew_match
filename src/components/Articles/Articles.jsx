import { Wrapper } from "./Articles.styled";
import img1 from "../../images/article/img1.jpg";
import img2 from "../../images/article/img2.jpg";
import img3 from "../../images/article/img3.jpg";
import img4 from "../../images/article/img4.jpg";

export const Articles = () => {
  return (
    <Wrapper>
      <li>
        <span>
          <img src={img1} alt="img1" />
        </span>
        <div>
          <h5>
            Whale hunting in the of nowhere and delivery catch back to the coast
          </h5>
          <p>Feature overview</p>
        </div>
      </li>
      <li>
        <span>
          <img src={img2} alt="img1" />
        </span>
        <div>
          <h5>
            Whale hunting in the of nowhere and delivery catch back to the coast
          </h5>
          <p>Feature overview</p>
        </div>
      </li>
      <li>
        <span>
          <img src={img3} alt="img1" />
        </span>
        <div>
          <h5>
            Whale hunting in the of nowhere and delivery catch back to the coast
          </h5>
          <p>Feature overview</p>
        </div>
      </li>
      <li>
        <span>
          <img src={img4} alt="img1" />
        </span>
        <div>
          <h5>
            Whale hunting in the of nowhere and delivery catch back to the coast
          </h5>
          <p>Feature overview</p>
        </div>
      </li>
    </Wrapper>
  );
};
