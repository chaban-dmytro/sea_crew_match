import { Filter } from "../../components/Filter/Filter";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Projects } from "../../components/Projects/Projects";

import { Title, Wrapper, FilterWrap } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Title>Find your project</Title>
        <Wrapper>
          <FilterWrap>
            <Filter />
          </FilterWrap>
          <Projects />
        </Wrapper>
      </div>
      <Footer isModal="true" />
    </>
  );
};
