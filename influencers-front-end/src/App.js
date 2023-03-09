import './App.css';
import CategoryList from './Components/CategoryList/CategoryList.js'
import AddButton from  './Components/AddButton/AddButton.js'
import SaveButton from  './Components/SaveButton/SaveButton.js'
import DeleteButton from  './Components/DeleteButton/DeleteButton.js'
import React, { useEffect, useState } from "react";
import finalOutput from './finalOutput.json';
import VideoPane from './Components/VideoPane/VideoPane.js'


function requestOAuth2Token() {
    const CLIENT_ID = '620677125812-g4634rpb7kam1r5hm8kq2mdccdhg3i5l.apps.googleusercontent.com';
    const REDIRECT_URI = 'http://localhost:3000/';
    const OAUTH2ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create element to open OAuth 2.0 endpoint in new window.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', OAUTH2ENDPOINT);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': CLIENT_ID,
                'redirect_uri': REDIRECT_URI,
                'scope': 'https://www.googleapis.com/auth/youtube.readonly',
                'state': 'try_sample_request',
                'include_granted_scopes': 'true',
                'response_type': 'token'};

    // Add form parameters as hidden input values.
    for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
}

function initiateBackendConnection() {
    localStorage.removeItem("oauth2-params");
    var fragmentString = window.location.hash.substring(1);
    var params = {};
    var regex = /([^&=]+)=([^&]*)/g, m;
    while (m = regex.exec(fragmentString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if(Object.keys(params).length > 0) {
        localStorage.setItem('oauth2-params', JSON.stringify(params));
    }

    var params = JSON.parse(localStorage.getItem('oauth2-params'));
    if (params && params['access_token']) {
        console.log(params["access_token"]);
        fetch("http://localhost:8080?" + new URLSearchParams({
            "token": params["access_token"]
        }))
        .then(res => console.log(res))
        .then(data => console.log(data))
    } else {
        requestOAuth2Token()
        .then(fetch("http://localhost:8080?" + new URLSearchParams({
            "token": params["access_token"]
        }))
        .then(res => console.log(res))
        .then(data => console.log(data)));
    }
}

function App() {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    let [categories, setCategories] = useState({
        "1": "Film & Animation",
        "2": "Autos & Vehicles",
        "10": "Music",
        "15": "Pets & Animals",
        "17": "Sports",
        "18": "Short Movies",
        "19": "Travel & Events",
        "20": "Gaming",
        "21": "Videoblogging",
        "23": "Comedy",
        "24": "Entertainment",
        "25": "News & Politics",
        "26": "Howto & Style",
        "27": "Education",
        "28": "Science & Technology",
        "29": "Nonprofits & Activism",
        "30": "Movies",
        "31": "Anime/Animation",
        "32": "Action/Adventure",
        "33": "Classics",
        "34": "Comedy",
        "35": "Documentary",
        "36": "Drama",
        "37": "Family",
        "38": "Foreign",
        "39": "Horror",
        "40": "Sci-Fi/Fantasy",
        "41": "Thriller",
        "42": "Shorts",
        "43": "Shows",
        "44": "Trailers"
    })
    // 2 shorts to fill "data". data[0] is a dog short, data[1] is a cat short
    let data = [finalOutput["items"][0], finalOutput["items"][0], finalOutput["items"][0]];

    
    useEffect(() => {
        fetch("http://localhost:8080/getCategories")
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])


    return (
        <div className="App">
        <div className="App-header">
            <p>
            Youtube Shorts Sorter
            </p>
            <button onClick={initiateBackendConnection}>Login</button>
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
              <VideoPane
                selectedCategory={selectedCategory}
                data={finalOutput}
              >
              </VideoPane>
            </div>
        </div>
        </div>
    );
}

export default App;
