import './CategoryList.css';

function CategoryList() {
    const categories = ["Dog", "Cat"];
    
    function addCategories() {
        var toAdd = document.createDocumentFragment();
        for(var i = 0; i < categories.length; i++) {
            console.log(i);
            var category = document.createElement("div");
            category.id = "category-" + i;
            category.className = "category";
            category.textContent = categories[i];
            toAdd.appendChild(category);
        }
        document.getElementById("categoryList").appendChild(toAdd);
    }
    
    window.onload = function() {
        addCategories();
    };

    return(
        <div id = "categoryList">
        </div>
    );
}
export default CategoryList;