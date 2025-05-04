import { useSelector } from 'react-redux';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const contact = useSelector((state) => state.contact);
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`w-full py-16 px-4 text-center ${
        isDarkMode ? 'bg-[#252128] text-purple-700' : 'bg-white text-[#3B2A9F]'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{contact.title}</h2>

      <p className="text-base text-white md:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
        {contact.description}
      </p>

      <a
        href={`mailto:${contact.email}`}
        className="text-base font-semibold underline hover:text-lime-500 transition mb-6"
      >
        {contact.email}
      </a>

      <div className="flex justify-center gap-6 mt-4">
        {contact.socials?.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition"
          >
            <img
              src={`/icons/${item.icon}`}
              alt={item.name}
              className="w-6 h-6"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
