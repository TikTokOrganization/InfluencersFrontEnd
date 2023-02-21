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
        <iframe className="Video-one"
              src={url}
              title="that girl era / Monday dinner #healrhylifestyle #foodie #shorts"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
    )

    /*const element = <div>
                        for (let step = 0; step < 5; step++) {
                            // Runs 5 times, with values of step 0 through 4.
                            Paragraph();
                        }
                    </div>*/

    // {urls}
    return(

        <div className="Video-row">
            {iFrames}
            <div className="Video-five"></div>
            <div className="Video-five"></div>
            <div className="Video-five"></div>
          </div>

    )

    /*
    
    <iframe className="Video-one"
              src="https://www.youtube.com/embed/EhKetUBuyxc"
              title="that girl era / Monday dinner #healrhylifestyle #foodie #shorts"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
            <img className="Video-one"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-two"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-three"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-four"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />

    */
    
}
export default VideoPane;