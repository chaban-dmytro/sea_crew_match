import { Items } from "./Navigation.styled";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Items>
        <li>
          <Link to="/sailors">Find Sailors</Link>
        </li>
        <li>
          <Link to="/projects">Find a project</Link>
        </li>
        <li>
          <Link to="/projects">How it works</Link>
        </li>
        <li>
          <Link to="/projects">Support</Link>
        </li>
      </Items>
    </nav>
  );
};
