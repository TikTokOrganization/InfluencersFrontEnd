import './CategoryList.css';
import React, { useEffect, useState } from "react";

function CategoryList(props) {
    const categories = ["Dog", "Cat"];
    let category = [categories.length];
    let [selectedCategory, setSelectedCategory] = useState(props.selectedCategory);

    // function handleCategoryChange(event) {
    //     props.onChange(event.target.value);
    // }

    function addCategories() {
        var toAdd = document.createDocumentFragment();
        for(var i = 0; i < categories.length; i++) {
            category[i] = document.createElement("div");
            category[i].id = i;
            category[i].className = "category";
            category[i].textContent = categories[i];
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
        }
        document.getElementById("categoryList").appendChild(toAdd);
    }

    window.onload = function() {
        addCategories();
    };

    return(
        <div id="categoryList">
        </div>
    );
}
export default CategoryList;