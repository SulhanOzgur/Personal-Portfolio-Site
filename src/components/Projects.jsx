import { useSelector } from 'react-redux';
import ProjectItem from './ProjectItem';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const projects = useSelector((state) => state.projects);

  return (
    <section
      className={`${
        isDarkMode ? 'bg-zinc-900 text-white' : 'bg-lime-200 text-[#3B2A9F]'
      } py-20 px-6`}
    >
      <div className="max-w-screen-xl mx-auto space-y-12 max-w-5xl">
        <h2 className="text-4xl font-bold dark:text-lime-200">Projects</h2>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
