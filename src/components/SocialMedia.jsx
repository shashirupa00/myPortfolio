import { FaLinkedinIn, FaGithub, FaCode } from "react-icons/fa";

function SocialMediaIcons() {
  const socials = [
    {
      id: "linkedin",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/shashishirupa",
    },
    {
      id: "github",
      icon: <FaGithub />,
      url: "https://github.com/shashirupa00",
    },
    {
      id: "leetcode",
      icon: <FaCode />,
      url: "https://leetcode.com/shashi_00/",
    },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-8">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 hover:scale-110 transition-colors duration-300 text-2xl px-8"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
