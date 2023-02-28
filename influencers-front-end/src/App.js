import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import React, { useEffect, useState } from "react";
import finalOutput from './finalOutput.json';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    let [categories, setCategories] = useState({
        "1": "Film & Animation",
        "2": "Autos & Vehicles",
        "10": "Music",
        "15": "Pets & Animals",
        "17": "Sports",
        "18": "Short Movies",
        "19": "Travel & Events",
        "20": "Gaming",
        "21": "Videoblogging",
        "23": "Comedy",
        "24": "Entertainment",
        "25": "News & Politics",
        "26": "Howto & Style",
        "27": "Education",
        "28": "Science & Technology",
        "29": "Nonprofits & Activism",
        "30": "Movies",
        "31": "Anime/Animation",
        "32": "Action/Adventure",
        "33": "Classics",
        "34": "Comedy",
        "35": "Documentary",
        "36": "Drama",
        "37": "Family",
        "38": "Foreign",
        "39": "Horror",
        "40": "Sci-Fi/Fantasy",
        "41": "Thriller",
        "42": "Shorts",
        "43": "Shows",
        "44": "Trailers"
    });
    // 2 shorts to fill "data". data[0] is a dog short, data[1] is a cat short
    let data = [finalOutput["items"][0], finalOutput["items"][0]];

    return (
        <div className="App">
        <div className="App-header">
            <p>
            Youtube Shorts Sorter
            </p>
        </div>

        <div className="App-container">
            <div className="App-left">
                <CategoryList categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></CategoryList>
            </div>
            <div className="App-right">
            </div>
        </div>
        </div>
    );
}

export default App;
