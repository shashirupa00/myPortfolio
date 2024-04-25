import Message from "./Message";
import Video from "./Video";
import Navbar from "./Navbar";
import SocialMediaIcons from "./SocialMedia";
import contact from "../assets/contactme.png";

function Contact() {
  return (
    <>
      <div>
        <Navbar />
        <Video />
        <div className="flex flex-col lg:flex-row items-center justify-around mt-56">
          <div className="bg-gray-300 shadow-lg rounded-lg p-8 m-4 lg:m-8 z-10 max-w-3xl w-full">
            <Message />
            <SocialMediaIcons />
          </div>
          <div className="m-4 lg:m-8 z-10">
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-full p-4">
              <img
                src={contact}
                className="w-80 h-80 rounded-full"
                alt="Contact Me"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
