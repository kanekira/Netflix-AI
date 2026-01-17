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
        <div className="flex w-screen aspect-video px-12 flex-col justify-center absolute text-white bg-gradient-to-r from-black h-screen">
            <h1 className="font-bold md:text-4xl font-serif w-1/3 mb-2 text-lg">{videoData.title}</h1>
            <p className="text-l font-light w-1/3 mb-2 hidden md:flex">{videoData.overview}</p>
            <div className="flex md:w-1/3 w-[50%]">
                <button className="flex-1 bg-white text-black hover:bg-opacity-80 md:mx-8 rounded-lg md:p-2 p-1 mr-2 text-sm md:text-lg">
                    ▶️ Play
                </button>
                <button className="flex-1 bg-white text-black md:mx-8 rounded-lg md:p-2 p-0 h-auto hover:bg-opacity-80 text-sm md:text-lg">
                ℹ️ More Info
                </button>
            </div>
        </div>
    )
};

export default VideoTitle;