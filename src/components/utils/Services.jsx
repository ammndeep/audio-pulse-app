export default function Services({ services }) {
  const { item } = services;
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:gap-10 gap-4">
        {item.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 p-4 rounded-md hover:shadow-md hover:shadow-black my-4 w-48 sm:w-auto"
          >
            <img src={item.icon} alt="icons" height={40} width={40} />
            <h1 className="text-lg text-black font-medium">{item.title}</h1>
            <p className="text-md text-slate-500 font-normal">{item.subText}</p>
          </div>
        ))}
      </div>
    </>
  );
}
