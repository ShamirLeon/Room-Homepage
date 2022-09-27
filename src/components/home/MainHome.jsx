import data from "../../data/slides.json";
import imgAboutDark from "../../assets/image-about-dark.jpg";
import imgAboutLight from "../../assets/image-about-light.jpg";

const MainHome = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-7 ">
      <img src={imgAboutDark} alt="" className="lg:col-span-2 w-full" />
      <section className="lg:col-span-3 flex flex-col justify-center content-center gap-3 lg:px-16 p-5">
        <h2 className="uppercase font-semibold text-base tracking-[.5rem]">
          {data.about.aboutTitle}
        </h2>
        <p className="text-gray-500">{data.about.aboutDescription}</p>
      </section>
      <img src={imgAboutLight} alt="" className="lg:col-span-2 w-full" />
    </main>
  );
};

export default MainHome;
