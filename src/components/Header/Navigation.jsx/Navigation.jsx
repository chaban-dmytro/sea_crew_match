import { Items } from "./Navigation.styled";
// import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
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
  );
};
