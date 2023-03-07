import './AddButton.css'
import React, { useEffect, useState } from "react";

function AddButton(props) {
    let [categories, setCategories] = useState(props.categories);


    function addCategory() {
        props.setCategories(categories.push("Test"));
    }

    return(
        <button className="AddButton" onClick={addCategory}>Add</button>
    );
}
export default AddButton;