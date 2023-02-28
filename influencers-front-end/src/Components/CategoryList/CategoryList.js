import './CategoryList.css';
import React, { useEffect, useState } from "react";

function CategoryList(props) {
    let [categories, setCategories] = useState(props.categories);
    let category = [categories.length]; // list of divs
    let [selectedCategory, setSelectedCategory] = useState(props.selectedCategory);


    function addCategories() {
        var toAdd = document.createDocumentFragment();
        let i = 0;
        for (const [key, value] of Object.entries(categories)) {
            category[i] = document.createElement("div");
            category[i].id = i;
            category[i].className = "category";
            category[i].textContent = value;
            category[i].onclick = (function(i) {
                return function() {
                    if (selectedCategory == i) {
                        selectedCategory = -1;
                    } else {
                        selectedCategory = i;
                    }
                    for (const c of category) {
                        if (parseInt(c.id) == selectedCategory) {
                            c.style.backgroundColor = "#ADD8E6";
                        } else {
                            c.style.backgroundColor = "white";
                        }
                    }
                    props.setSelectedCategory(selectedCategory);
                };
            })(i);
            toAdd.appendChild(category[i]);
            i += 1;
        }
        document.getElementById("categoryList").appendChild(toAdd);
    }

    window.onload = function() {
        addCategories();
    };

    return(
        <div className="categoryList" id="categoryList">
        </div>
    );
}
export default CategoryList;