import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import React, { useEffect, useState } from "react";
import finalOutput from './finalOutput.json';
import VideoPane from './Components/VideoPane/VideoPane.js'
import ShortExample from './Images/ShortExample.png';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(-1);

    let categories;
    // 2 shorts to fill "data". data[0] is a dog short, data[1] is a cat short
    let data = [finalOutput["items"][0], finalOutput["items"][0]];

    console.log(data);

    function getCategories() {
        // TODO: this function gets categories based on the tags of the videos
        // right now, it is "autofilled" based off of "data"
        categories = ["Dog", "Cat"]
    }

    return (
        <div className="App">
        <div className="App-header">
            <p>
            Youtube Shorts Sorter
            </p>
        </div>

        <div className="App-container">
            <div className="App-left">
                <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            </div>
            <div className="App-right">
              <VideoPane>
              </VideoPane>
            </div>
        </div>
        </div>
    );
}

export default App;
