import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import AddButton from  './Components/AddButton/AddButton.js'
import SaveButton from  './Components/SaveButton/SaveButton.js'
import DeleteButton from  './Components/DeleteButton/DeleteButton.js'
import React, { useEffect, useState } from "react";
import finalOutput from './finalOutput.json';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    let [categories, setCategories] = useState([
        "Film & Animation",
        "Autos & Vehicles",
        "Music",
        "Pets & Animals",
        "Sports",
        "Short Movies",
        "Travel & Events",
        "Gaming",
        "Videoblogging",
        "Comedy",
        "Entertainment",
        "News & Politics",
        "Howto & Style",
        "Education",
        "Science & Technology",
        "Nonprofits & Activism",
        "Movies",
        "Anime/Animation",
        "Action/Adventure",
        "Classics",
        "Comedy",
        "Documentary",
        "Drama",
        "Family",
        "Foreign",
        "Horror",
        "Sci-Fi/Fantasy",
        "Thriller",
        "Shorts",
        "Shows",
        "Trailers"
    ]);
    const [categoryKey, setCategoryKey] = useState(0);

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
                <CategoryList categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categoryKey={categoryKey}></CategoryList>
                <div className="AddButtonContainer">
                    <AddButton categories={categories} setCategories={setCategories} categoryKey={categoryKey} setCategoryKey={setCategoryKey}></AddButton >
                </div>
                <div className="SaveButtonContainer">
                    <SaveButton></SaveButton>
                </div>
                <div className="DeleteButtonContainer">
                    <DeleteButton></DeleteButton>
                </div>
            </div>
            <div className="App-right">
            </div>
        </div>
        </div>
    );
}

export default App;
