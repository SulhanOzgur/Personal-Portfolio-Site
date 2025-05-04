import { useSelector } from 'react-redux';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const skillsData = useSelector((state) => state.skills);

  return (
    <section
      className={`w-full py-20 px-6 ${
        isDarkMode ? 'bg-[#252128] text-white' : 'bg-white text-[#3B2A9F]'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-left max-w-screen-xl mx-auto dark:text-lime-200">
        {skillsData.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
        {skillsData?.skills?.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              src={`/icons/${skill.icon}`}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
