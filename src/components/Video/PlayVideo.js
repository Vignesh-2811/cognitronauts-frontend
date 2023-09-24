const PlayVideo = () => {
  return (
    <video width="100%" controls autoPlay>
      <source src="/video.mp4" type="video/mp4"  />
    </video>
  );
};

export default PlayVideo;
