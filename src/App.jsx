import data from "../data/slides.json";
import imgAboutDark from "./assets/image-about-dark.jpg";
import imgAboutLight from "./assets/image-about-light.jpg";
import IconArrow from "./components/icons/IconArrow.jsx";
import IconPrev from "./components/icons/IconPrev";
import IconNext from "./components/icons/IconNext";
import NavBar from "./components/menu/NavBar";


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <header className="grid grid-cols-3 lg:grid-cols-7 grid-rows-[10fr_1.5fr_10fr] lg:grid-rows-[10fr_1.5fr]">
        <img
          src={data.sliders[0].imgUrl}
          alt=""
          className="col-start-1 col-end-4 row-start-1 row-end-3 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3 w-full h-full"
        />
        <article className="col-start-1 col-end-4 row-start-3 row-end-4 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-24 flex flex-col justify-center items-start gap-5 p-5">
          <h1 className="font-bold text-4xl">{data.sliders[0].sliderTitle}</h1>
          <p className="text-gray-500">{data.sliders[0].sliderDescription}</p>
          <button className="flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black">
            <span className="font-bold text-sm uppercase tracking-[1rem] ">
              Shop Now
            </span>
            <IconArrow></IconArrow>
          </button>
        </article>

        <div className="bg-black flex col-start-3 col-end-4 row-start-2 row-end-3 lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
          <button className="w-full hover:bg-gray-500 duration-500">
            <IconPrev className="mx-auto"></IconPrev>
          </button>
          <button className="w-full hover:bg-gray-500 duration-500">
            <IconNext className="mx-auto"></IconNext>
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-7 ">
        <img src={imgAboutDark} alt="" className="lg:col-span-2" />
        <section className="lg:col-span-3 flex flex-col justify-center content-center gap-3 lg:px-16 p-5">
          <h2 className="uppercase font-semibold text-base tracking-[.5rem]">{data.about.aboutTitle}</h2>
          <p className="text-gray-500">{data.about.aboutDescription}</p>
        </section>
        <img src={imgAboutLight} alt="" className="lg:col-span-2" />
      </main>
    </div>
  );
};

export default App;
