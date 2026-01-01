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
        <div className="flex w-screen aspect-video px-12 flex-col justify-center absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-4xl font-serif w-1/3 mb-2">{videoData.title}</h1>
            <p className="text-l font-light w-1/3 mb-2">{videoData.overview}</p>
            <div className="flex w-1/3">
                <button className="flex-1 bg-white text-black hover:bg-opacity-80 mx-8 rounded-lg p-2">
                    ▶️ Play
                </button>
                <button className="flex-1 bg-white text-black mx-8 rounded-lg p2 hover:bg-opacity-80">
                ℹ️ More Info
                </button>
            </div>
        </div>
    )
};

export default VideoTitle;