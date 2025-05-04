const ProjectItem = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={`/icons/${project.image}`}
        alt={project.title}
        className="w-full md:w-1/3 object-cover"
      />

      <div className="p-6 space-y-4 md:w-2/3 dark:bg-[#252128]">
        <h3 className="text-2xl font-bold text-[#3B2A9F] dark:text-purple-300">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-white">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-[#3B2A9F] dark:bg-purple-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6 text-black font-medium underline dark:text-lime-200">
          <a href={project.url} target="_blank" rel="noreferrer">
            View Site
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
