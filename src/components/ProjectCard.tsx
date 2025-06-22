interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  techStack,
}: ProjectCardProps) => {
  return (
    <button
      className="relative flex flex-col justify-end w-96 h-68 rounded-3xl cursor-pointer overflow-hidden bg-cover bg-center group"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      <div className="absolute inset-0 from-black via-black/50 to-transparent bg-gradient-to-t"></div>

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="bg-emerald-500/15 border border-emerald-300/25 text-emerald-400 px-3 py-2 rounded-xl font-semibold hover:bg-emerald-500/25 hover:border-emerald-300/35 transition-all duration-200">
          View
        </div>
        <div className="bg-white/15 border border-white/30 text-slate-200 px-3 py-2 rounded-xl font-semibold hover:bg-white/25 hover:border-white/40 transition-all duration-200">
          GitHub
        </div>
      </div>

      <div className="relative z-10 flex items-start flex-col p-4">
        <p className="title font-semibold text-2xl text-white font-family-recoletaRegular">
          {title}
        </p>
        <p className="description text-sm text-gray-200 text-start font-manrope-regular tracking-wide">
          {description}
        </p>
      </div>

      <div className="absolute top-3 right-3 flex flex-col items-end font-manrope-regular gap-2 z-10">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="cursor-pointer flex border w-fit text-purple-100 text-[0.7rem] border-purple-400/30 bg-purple-900/20 backdrop-blur-xl py-1 px-2 rounded-md shadow-xl hover:bg-purple-800/30 hover:border-purple-300/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 backdrop-saturate-150 hover:text-purple-50"
          >
            {tech}
          </div>
        ))}
      </div>
    </button>
  );
};

export default ProjectCard;
