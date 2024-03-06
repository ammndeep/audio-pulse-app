/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Hero({ heroapi }) {
  const { heading, subtitle, btnText, img } = heroapi;
  // console.log(title);

  return (
    <>
      <main className="max-w-6xl mx-auto mt-12">
        <section className="flex flex-col justify-center sm:flex-row p-5 items-center mb-12 sm:-mt-8 mt-5 scroll-mt-40 gap-5">
          <article className="sm:w-1/2 flex flex-col items-center sm:items-start">
            <h1 className="max-w-lg text-5xl font-bold text-center sm:text-7xl sm:text-left gradient-text">
              {heroapi.heading}
            </h1>
            <p className="max-w-lg sm:text-lg text-md mt-4 text-center sm:text-left text-slate-400 ">
              {heroapi.subtitle}
            </p>
            <p className="italic text-center text-slate-500 sm:text-left text-xl mt-2">
              &quot;Unleash Your Sound Experience.&quot;
            </p>
            <button className="mt-4 text-center px-4 py-2 bg-transparent border-2 rounded-full border-black text-black hover:text-white hover:bg-black">
              {heroapi.btnText}
            </button>
          </article>
          <img src={heroapi.img} alt="hero-image" className="sm:w-1/2" />
        </section>
      </main>
    </>
  );
}
