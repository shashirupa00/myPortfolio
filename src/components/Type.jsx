import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span className="md:text-4xl text-gray-100 font-bold">
      <Typewriter
        options={{
          strings: ["Software Engineer", "Full Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </span>
  );
}

export default Type;
