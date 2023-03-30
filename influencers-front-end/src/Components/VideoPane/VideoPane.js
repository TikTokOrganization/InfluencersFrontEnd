import './VideoPane.css';
import React, { useEffect, useState } from "react";

function VideoPane(props) {

    //useEffect(() => {

        console.log(props.selectedCategory)
    
        const vidDict = props.data
        let allVideos = []

        let categoryKeys = Object.keys(vidDict)
        if(props.selectedCategory == -1) {
            //console.log(categoryKeys)
            console.log("test1")
            for(let i = 0; i < categoryKeys.length; i++) {
                let videos = vidDict[categoryKeys[i]];
                //console.log(videos[0]._source)
                for(let j = 0; j<videos.length; j++) {
                    allVideos.push(videos[j]._source); //._source
                }
            }
        } else {
            console.log("test2")
            let currentCategory = categoryKeys[props.selectedCategory]
            let someVideos = vidDict[currentCategory]
            for(let j = 0; j<someVideos.length; j++) {
                allVideos.push(someVideos[j]._source);
            }
        }

        console.log(allVideos)

    //})


    /*const test = videoObjects.filter((video) => {
        if(video.snippet.categoryId == props.selectedCategory || props.selectedCategory == -1) {
            return true;
        }
        return false;
    })*/

    // inside test

    /*if(props.selectedCategory == 0) {
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
        }
        return true;*/

    const iFrames = allVideos.map((video) => { 

        let url_2 = 'https://www.youtube.com/watch?v=' + video.id
        let url = video.snippet.thumbnails.default.url

        return (
            
            <div className='Video'>
            <a href={url_2} target="_blank">
                <img className='VideoImage'
                    src={url}
                >
                </img>
            </a>
            </div>

        )

        /*
        
        <a href={url_2} target="_blank">
                <img className='Video'
                    src={url}
                >
                </img>
            </a>
        */

        
    })

    /*
    <iframe className="Video"
                src={url_2}
                title="that girl era / Monday dinner #healrhylifestyle #foodie #shorts"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
    */

    

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