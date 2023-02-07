import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'

function App() {    
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Youtube Shorts Sorter
        </p>
      </div>

      <div className="App-container">
        <div className="App-left">
            <CategoryList>
            </CategoryList>
        </div>
        <div className="App-right">
        </div>
      </div>
    </div>
  );
}

export default App;
