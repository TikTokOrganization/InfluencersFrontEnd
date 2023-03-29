import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import AddButton from  './Components/AddButton/AddButton.js'
import SaveButton from  './Components/SaveButton/SaveButton.js'
import DeleteButton from  './Components/DeleteButton/DeleteButton.js'
import React, { useEffect, useState } from "react";
import finalOutput from './finalOutput.json';
import VideoPane from './Components/VideoPane/VideoPane.js'
import load from 'little-loader'

function App() {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    let [categories, setCategories] = useState({});
    load('https://accounts.google.com/gsi/client', (err) => {

    })
    
    useEffect(() => {
        fetch("http://localhost:8080/getShortsOfCategory")
            .then(res => res.json())
            .then((response) => {
                console.log(response);
                setCategories(response);
            })
    }, [])


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
                <div className="AddButtonContainer">
                    <AddButton categories={categories} setCategories={setCategories}></AddButton >
                </div>
                <div className="SaveButtonContainer">
                    <SaveButton></SaveButton>
                </div>
                <div className="DeleteButtonContainer">
                    <DeleteButton></DeleteButton>
                </div>
            </div>
            <div className="App-right">
              {<VideoPane
                selectedCategory={selectedCategory}
                data={finalOutput}>
                </VideoPane>}
            </div>
        </div>
        </div>
    );
}

export default App;