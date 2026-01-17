import useVideoApi from "../hooks/useVideoApi";

type VideoProp = {
    videoId: {
        id: number
    }
}

const VideoTrailer = ({videoId}: VideoProp) => {
    const videoDetails = useVideoApi(videoId.id);
    const videoKey = videoDetails?.[videoDetails?.length - 1];
    return (
        <div className="w-screen h-screen overflow-hidden">
            <iframe 
                className="md:w-screen md:aspect-video md:h-auto w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey?.key}?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                >
            </iframe>
        </div>
    )
};

export default VideoTrailer;