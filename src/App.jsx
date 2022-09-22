import data from "../data/slides.json";
import imgAboutDark from "./assets/image-about-dark.jpg";
import imgAboutLight from "./assets/image-about-light.jpg";
import IconArrow from "./components/icons/IconArrow.jsx";
import IconPrev from "./components/icons/IconPrev";
import IconNext from "./components/icons/IconNext";

const App = () => {
  return (
    <div>
      <nav>
        <a href="#">Room</a>
        <div>
          <a href="#">Shop</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <header className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
        <img
          src={data.sliders[0].imgUrl}
          alt=""
          className="lg:col-span-4 lg:row-span-2 w-full h-full"
        />
        <article className="lg:col-span-3 lg:px-24 flex flex-col justify-center items-start gap-7">
          <h1 className="font-bold text-4xl">{data.sliders[0].sliderTitle}</h1>
          <p className="text-gray-500">{data.sliders[0].sliderDescription}</p>
          <button className="flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black">
            <span className="font-bold text-sm uppercase tracking-[1rem] ">
              Shop Now
            </span>
            <IconArrow></IconArrow>
          </button>
        </article>
        <div className="bg-black flex">
          <button className="w-full hover:bg-gray-500">
            <IconPrev className="mx-auto"></IconPrev>
          </button>
          <button className="w-full hover:bg-gray-500">
            <IconNext className="mx-auto"></IconNext>
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-7">
        <img src={imgAboutDark} alt="" className="lg:col-span-2" />
        <section className="lg:col-span-3 flex flex-col justify-center content-center gap-3 lg:px-16">
          <h2 className="uppercase font-semibold text-base tracking-[.5rem]">{data.about.aboutTitle}</h2>
          <p className="text-gray-500">{data.about.aboutDescription}</p>
        </section>
        <img src={imgAboutLight} alt="" className="lg:col-span-2" />
      </main>
    </div>
  );
};

export default App;
