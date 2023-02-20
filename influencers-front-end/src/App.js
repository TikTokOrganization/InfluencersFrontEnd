import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import VideoPane from './Components/VideoPane/VideoPane.js'
import ShortExample from './Images/ShortExample.png';

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
          <VideoPane>
          </VideoPane>
        </div>
      </div>
    </div>
  );


/*

            <div className="Video-four">
            <img className="Video-four"
              src={ShortExample}
              alt={"ShortExample"}
            />
            </div>
            <div className="Video-five">
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            </div>


          <div className="Video-row">
            <img className="Video"
              src={ShortExample}
              alt={"ShortExample"}
            />
          </div>

*/


/*

          <div className="Video-row">
            <div className="Video-one">
            <img className="Video-one"
              src={"Images/ShortExample.png"}
              alt={"ShortExample"}
            />
            </div>
            <div className="Video-two">
            <img className="Video-two"
              src={"Images/ShortExample.png"}
              alt={"ShortExample"}
            />
            </div>
          </div>

*/

}

export default App;
