import Video from "./Video";
import Navbar from "./Navbar";
import Body from "./Body";

function HomePage() {
  return (
    <div>
      <Video className="absolute inset-0 w-full h-full object-cover -z-10" />
      <Navbar />
      <Body />
    </div>
  );
}

export default HomePage;
