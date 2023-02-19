import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
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
          <div className="Video-row">
            <iframe className="Video-one"
              src="https://www.youtube.com/embed/EhKetUBuyxc"
              title="that girl era / Monday dinner #healrhylifestyle #foodie #shorts"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
            <img className="Video-one"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-two"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-three"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-four"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <img className="Video-five"
              src={ShortExample}
              alt={"ShortExample"}
            />
            <div className="Video-five"></div>
            <div className="Video-five"></div>
            <div className="Video-five"></div>
          </div>
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
