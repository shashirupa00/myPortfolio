const ResumeCard = ({ key, experience }) => {
  return (
    <div className="max-w-md my-10 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-xl overflow-hidden md:max-w-5xl">
      <div className="p-8">
        <h2 className=" text-white text-2xl font-bold mb-3">
          {experience.companyName}
        </h2>
        <div className="mb-4">
          <p className="text-white text-opacity-90 text-sm">
            {experience.date}
          </p>
          <p className="text-lg text-white">{experience.role}</p>
          <p className="text-sm text-white text-opacity-75">
            {experience.location}
          </p>
        </div>
        <ul className="list-disc pl-5">
          {experience.description.map((point, index) => (
            <li key={index} className="text-white mb-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeCard;
