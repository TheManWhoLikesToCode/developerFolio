import "./EmbeddedVideos.scss";
import { embeddedVideos } from "../../portfolio";

export default function EmbeddedVideos() {

  if (!embeddedVideos.display) {
    return null;
  }

  return (
    <div className="embedded-videos-main" id="embedded-videos">
      <h1 className="embedded-videos-title">Media</h1>
      <div className="embedded-videos-grid">
        {embeddedVideos.videos.map((video, index) => (
          <div key={index} className="embedded-video-item">
            <h3>{video.title}</h3>
            <iframe
              width="630"
              height="360"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}