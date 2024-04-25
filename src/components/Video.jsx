function Video() {
  return (
    <div>
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="src\assets\bg.mp4" />
      </video>
    </div>
  );
}

export default Video;

//"absolute inset-0 w-full h-full object-cover -z-10"
//"fixed top-0 left-0 w-full  -z-10"
