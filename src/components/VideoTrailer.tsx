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
        <div className="w-screen">
            <iframe 
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${videoKey?.key}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                >
            </iframe>
        </div>
    )
};

export default VideoTrailer;