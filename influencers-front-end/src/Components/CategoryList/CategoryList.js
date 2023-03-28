import './CategoryList.css';
import React, { useEffect, useState } from "react";

function CategoryList(props) {
    let [categories, setCategories] = useState(props.categories);
    let [selectedCategory, setSelectedCategory] = useState(props.selectedCategory);
    let [categoryList, setCategoryList] = useState([]);

    let temp = [Object.keys(props.categories).length];

    useEffect(() => {
        let temp = [Object.keys(props.categories).length];
        if (selectedCategory < 0) {
            return;
        }
        temp[selectedCategory] = 1;
    });

    useEffect(() => {
        if (Object.keys(props.categories).length == categoryList.length) {
            return;
        }
        Object.values(props.categories).forEach((category, i) => {
            categoryList.push(<div
                        className="category"
                        id={i}
                        key={i}
                        onClick = {(function(i) {
                            return function () {
                                if (selectedCategory == i) {
                                    selectedCategory = -1;
                                } else {
                                    selectedCategory = i;
                                }
                                console.log(categoryList);
                                for (let j = 0; j < Object.keys(props.categories).length; j++) {
                                    if (j == selectedCategory) {
                                        document.getElementById(j).style.backgroundColor = "#ADD8E6";
                                    } else {
                                        document.getElementById(j).style.backgroundColor = "white";
                                    }
                                }
                                props.setSelectedCategory(selectedCategory);
                            }
                        })(i)}
                        >
                        {category}
                        </div>)
        })
    }, [props.categories]);

    return(
        <div className="categoryList" id="categoryList"> 
        {categoryList}
        </div>
    );
}
export default CategoryList;