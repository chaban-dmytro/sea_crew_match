import { Thumb, Button } from "./Pagination.styled";
import sprite from "../../images/sptite.svg";

export const Pagination = () => {
  return (
    <Thumb>
      <li>
        <Button type="button">
          <svg>
            <use href={sprite + "#icon-u_angle-left-b"}></use>
          </svg>
        </Button>
      </li>
      <li>
        <Button type="button" active>
          1
        </Button>
      </li>
      <li>
        <Button type="button">2</Button>
      </li>
      <li>
        <Button type="button">3</Button>
      </li>
      <li>
        <Button type="button">...</Button>
      </li>
      <li>
        <Button type="button">12</Button>
      </li>
      <li>
        <Button type="button">
          <svg>
            <use href={sprite + "#icon-u_angle-right-b"}></use>
          </svg>
        </Button>
      </li>
    </Thumb>
  );
};
