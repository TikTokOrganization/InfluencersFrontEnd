import './VideoPane.css';

function VideoPane(props) {

    const videoObjects = props.data.items

    const test = videoObjects.filter((video) => {
        
        if(props.selectedCategory == 0) {
            if(video.snippet.categoryId == 1) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 1) {
            if(video.snippet.categoryId == 2) {
                return true;
                //24
            } else {
                return false;
            }
        } else if(props.selectedCategory == 2) {
            if(video.snippet.categoryId == 10) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 3) {
            if(video.snippet.categoryId == 15) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 4) {
            if(video.snippet.categoryId == 17) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 5) {
            if(video.snippet.categoryId == 18) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 6) {
            if(video.snippet.categoryId == 19) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 7) {
            if(video.snippet.categoryId == 20) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 8) {
            if(video.snippet.categoryId == 21) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 9) {
            if(video.snippet.categoryId == 23) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 10) {
            if(video.snippet.categoryId == 24) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 11) {
            if(video.snippet.categoryId == 25) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 12) {
            if(video.snippet.categoryId == 26) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 13) {
            if(video.snippet.categoryId == 27) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 14) {
            if(video.snippet.categoryId == 28) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 15) {
            if(video.snippet.categoryId == 29) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 16) {
            if(video.snippet.categoryId == 30) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 17) {
            if(video.snippet.categoryId == 31) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 18) {
            if(video.snippet.categoryId == 32) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 19) {
            if(video.snippet.categoryId == 33) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 20) {
            if(video.snippet.categoryId == 34) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 21) {
            if(video.snippet.categoryId == 35) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 22) {
            if(video.snippet.categoryId == 36) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 23) {
            if(video.snippet.categoryId == 37) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 24) {
            if(video.snippet.categoryId == 38) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 25) {
            if(video.snippet.categoryId == 39) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 26) {
            if(video.snippet.categoryId == 40) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 27) {
            if(video.snippet.categoryId == 41) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 28) {
            if(video.snippet.categoryId == 42) {
                return true;
            } else {
                return false;
            }
        } else if(props.selectedCategory == 29) {
            if(video.snippet.categoryId == 43) {
                return true;
            } else {
                return false;
            }
        } else {
            if(video.snippet.categoryId == 44) {
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