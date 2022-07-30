// imports for app js
import "./App.css";
// import state and context api
import { createContext, useState } from "react";
// importing the search bar component
import NewsSearchBar from "./components/searchNews";

// creating the context for the news api
export const newsAPI = createContext();
function App() {
  // creating state to hold the news api data
  const [newsAPIData, setNewsAPIData] = useState();
  console.log(newsAPIData);

  return (
    // wrapping all of the app's code with the context api, using state to store the data of the news api search results
    <newsAPI.Provider value={{ newsAPIData, setNewsAPIData }}>
      <div className="app">
        <header className="app-header">
          <h1 className="app-head-title"> News Finder</h1>
        </header>
        <p className="app-text">
          Use The search bar below to find articles in the topics of your
          choice!
        </p>
        <NewsSearchBar />
      </div>
    </newsAPI.Provider>
  );
}

export default App;
