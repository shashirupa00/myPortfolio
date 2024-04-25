function ProjectCard({ id, name, logo, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-60 rounded-xl overflow-hidden shadow-lg bg-slate-200 hover:shadow-xl transition duration-300 transform hover:scale-105 h-80">
        <img className="w-full h-60 object-cover" src={logo} alt={name} />
        <div className="px-6 py-4 h-18">
          <div className="font-bold text-xl">{name}</div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
