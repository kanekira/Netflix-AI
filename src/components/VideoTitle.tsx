type VideoData = {
  title?: string;
  overview?: string;
  // add other props here as needed
}

type VideoTitleProps = {
  videoData: VideoData;
};

const VideoTitle = ({videoData}: VideoTitleProps) => {
    return (
        <div className="flex h-screen px-8 flex-col justify-center w-1/2 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-5xl font-serif">{videoData.title}</h1>
            <h3 className="text-xl font-bold">{videoData.overview}</h3>
            <div className="flex w-1/2">
                <button className="flex-1 bg-black text-white hover: bg-opacity-80">
                    ▶️ Play
                </button>
                <button className="flex-1">
                ℹ️ More Info
                </button>
            </div>
        </div>
    )
};

export default VideoTitle;