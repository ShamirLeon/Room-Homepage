import data from "../../../data/slides.json";
import IconArrow from "../icons/IconArrow";

const ArticleHome = ({hero}) => {
  return (
    <>
      <img
        src={hero.imgDesktop}
        alt={hero.imgDesktop}
        className="col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-full h-full"
      />
      <article className="col-start-1 col-end-4 row-start-3 row-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-24 flex flex-col justify-center items-start gap-5 p-5">
        <h1 className="font-bold text-4xl">{hero.sliderTitle}</h1>
        <p className="text-gray-500">{hero.sliderDescription}</p>
        <button className="flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black">
          <span className="font-bold text-sm uppercase tracking-[1rem] ">
            Shop Now
          </span>
          <IconArrow></IconArrow>
        </button>
      </article>
    </>
  );
};

export default ArticleHome;
