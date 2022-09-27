import data from "../../../data/slides.json";
import IconPrev from "../icons/IconPrev";
import IconNext from "../icons/IconNext";
import ArticleHome from "./ArticleHome";
import { useState } from "react";

const ArticlesHero = data.sliders;

const HeaderHome = () => {
  let [index, setIndex] = useState(0);

  const handlePrev = (params) => {
    setIndex(index - 1);
    if (index == 0) setIndex(ArticlesHero.length - 1);
  };

  const handleNext = (params) => {
    setIndex(index + 1);
    if (index > ArticleHome.length) setIndex(0);
  };

  return (
    <header className="grid grid-cols-3 lg:grid-cols-7 grid-rows-[10fr_1.5fr_10fr] lg:grid-rows-[10fr_1.5fr]">
      <ArticleHome hero={ArticlesHero[index]}></ArticleHome>

      <div className="bg-black flex col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
        <button
          className="w-full hover:bg-gray-500 duration-500"
          onClick={handlePrev}
        >
          <IconPrev className="mx-auto"></IconPrev>
        </button>
        <button
          className="w-full hover:bg-gray-500 duration-500"
          onClick={handleNext}
        >
          <IconNext className="mx-auto"></IconNext>
        </button>
      </div>
    </header>
  );
};

export default HeaderHome;
