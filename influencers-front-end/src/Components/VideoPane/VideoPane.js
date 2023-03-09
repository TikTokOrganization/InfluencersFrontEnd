import './VideoPane.css';

function VideoPane(props) {

    const videoObjects = props.data.items

    const test = videoObjects.filter((video) => {
        
        if(props.selectedCategory == 0) {
            if(video.snippet.categoryId == 17) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 1) {
            if(video.snippet.categoryId == 23) {
                return true;
                //24
            } else {
                return false;
            }
        } else if(props.selectedCategory == 2) {
            if(video.snippet.categoryId == 22) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    })

    const iFrames = test.map((video) => { 

        let url = 'https://www.youtube.com/embed/' + video.id

        return (
            /*<p>{url}</p>*/
            <iframe className="Video"
              src={url}
              title="that girl era / Monday dinner #healrhylifestyle #foodie #shorts"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
        )
    })

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