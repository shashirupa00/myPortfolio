import Navbar from "./Navbar";
import Video from "./Video";
import hello from "../assets/hello.png";

function About() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center align-middle">
        <Video className="absolute inset-0 h-full w-full object-cover" />
        <div className="text-white container max-w-4xl mt-44 px-4">
          <h1 className="text-white text-6xl font-bold text-center mb-6">
            About Me...
          </h1>
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-lg shadow-lg overflow-hidden">
            <div
              className="md:w-4/5 p-6 text-justify"
              style={{ fontFamily: "monospace", lineHeight: "1.75" }}
            >
              <p className="text-2xl">
                Hey, I'm Shashi Shirupa, a software engineer and full-stack
                developer. When I'm not staring at lines of code, you might
                catch me shooting hoops on the basketball court or getting lost
                in the digital realms of gaming. And hey, when I need a break
                from the tech world, I love to unwind by diving into books and
                articles about the vast expanse of space. So, if you're into
                tech, sports, gaming, or just pondering the mysteries of the
                universe, let's connect and explore together!
              </p>
            </div>
            <div className="md:w-2/5 p-4 flex items-center justify-center">
              <img src={hello} className="w-60 h-60 rounded-lg" alt="hello" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
