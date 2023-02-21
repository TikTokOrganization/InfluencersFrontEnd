import './VideoPane.css';
import ShortExample from '../../Images/ShortExample.png';

function Paragraph() {
    return(
        <p>
            This is a paragraph.
        </p>
    )
}

function VideoPane() {
    const urls = [
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
        "https://www.youtube.com/embed/EhKetUBuyxc",
    ]

    const iFrames = urls.map((url) => 
        <iframe className="Video"
              src={url}
              title="that girl era / Monday dinner #healrhylifestyle #foodie #shorts"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
    )

    return(

        <div className="Video-row">
            {iFrames}
            <div className="Video"></div>
            <div className="Video"></div>
            <div className="Video"></div>
          </div>

    )
    
}
export default VideoPane;