import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import React, { useEffect, useState } from "react";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(-1);

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
            </div>
        </div>
        </div>
    );
}

export default App;
