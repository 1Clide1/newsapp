// imports for app js
import "./App.css";
// import state and context api
import { createContext, useState } from "react";
// importing the search bar component
import NewsSearchBar from "./components/searchNews";
// import the news cards component
import NewsCards from "./components/newsCards";
// import react loader spinner
import { InfinitySpin } from "react-loader-spinner";

// creating the context for the news api
export const newsAPI = createContext();
function App() {
  // creating state to hold the news api data
  const [newsAPIData, setNewsAPIData] = useState();
  const [loading, setLoading] = useState();
  console.log(loading);

  return (
    // wrapping all of the app's code with the context api, using state to store the data of the news api search results
    <newsAPI.Provider
      value={{ newsAPIData, setNewsAPIData, loading, setLoading }}
    >
      <div className="app">
        <header className="app-header">
          <h1 className="app-head-title"> News Finder</h1>
        </header>
        <p className="app-text">
          Use The search bar below to find articles in the topics of your
          choice!
        </p>
        <NewsSearchBar />
        <NewsCards />
        {loading === true ? (
          // adding the div helps me align the loading animation to the center sadly does not seem like i can increase the size since the width really does not inscrease size at all.
          // at least not on mobile
          <div className="loading-animation">
            <InfinitySpin width="400" color="#124f50" />
          </div>
        ) : null}
      </div>
    </newsAPI.Provider>
  );
}

export default App;
