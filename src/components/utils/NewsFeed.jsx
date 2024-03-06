export default function NewsFeed({ newsFeed }) {
  const { heading, items, subText, title, web } = newsFeed;

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="my-5 flex flex-col justify-center items-center">
          <span className="text-gray-500 font-medium text-xl">{title}</span>
          <h1 className=" font-medium text-4xl my-2">{heading}</h1>
          <p className=" font-normal sm:text-lg text-[13px] my-1">{subText}</p>
          <span className="text-slate-500 font-medium text-md sm:text-xl ">
            {web}
          </span>
        </div>
        {/* instagram images */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {items.map((item) => (
            <div key={item.id} className="hover:shadow-xl shadow-black">
              <img src={item.img} alt="instagram_images" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
