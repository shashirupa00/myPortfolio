const DownloadButton = () => {
  return (
    <a
      href="src/assets/Shashi_Shirupa_CV.pdf"
      download="ShashiShirupaResume.pdf"
      className="bg-gray-100 w-fit p-3 rounded-3xl text-purple-600 font-bold text-xl inline-block transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-400"
    >
      Download Resume
    </a>
  );
};

export default DownloadButton;
