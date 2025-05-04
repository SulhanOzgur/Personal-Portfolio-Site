import { useSelector } from 'react-redux';

const Hero = () => {
  const hero = useSelector((state) => state.hero);

  return (
    <section className="relative w-full flex">
      {/* Sol 2/3 – Yeni mavi (#3B2A9F) */}
      <div className="w-2/3 bg-[#3B2A9F] text-lime-200 dark:bg-[#0B0C42] dark:text-lime-200 px-14 py-24 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">{hero.title}</h2>
        <p className="text-xl text-white">{hero.description}</p>

        <div className="flex gap-4 mt-4">
          {hero.socials?.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:scale-105 transition"
            >
              <img
                src={`/icons/${item.icon}`}
                alt={item.name}
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-[#3B2A9F]">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Sağ 1/3 – Hep Yeşil */}
      <div className="w-1/3 bg-lime-200 dark:bg-[#1D1D1D]" />

      {/* Fotoğraf tam ortada */}
      <img
        src={`/icons/${hero.profileImage}`}
        alt="Profile"
        className="absolute top-1/2 left-[66.6667%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-3xl shadow-lg object-cover"
      />
    </section>
  );
};

export default Hero;
