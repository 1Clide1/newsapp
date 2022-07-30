// setting the imports
// import the api
import { searchNews } from "../utils/API";
// import react
import React, { useState, useContext } from "react";
// import the news api context to pass over the state
import { newsAPI } from "../App";
// import css
import "./search-news.css";

function NewsSearchBar() {
  // using the set state from the context api
  const { setNewsAPIData } = useContext(newsAPI);
  //   creating some state to hold the user's search query
  const [search, setSearch] = useState("");
  //   getting the search that the user typed in from the search bar
  const handleSearchBar = (e) => {
    setSearch(e.target.value);
  };
  //   function to handle the search bar queries for the api
  const handleSearchResults = async (event) => {
    console.log(search);
    event.preventDefault();
    try {
      const response = await searchNews(search);
      //   if the response is not ok throw an error
      if (!response.ok) {
        throw new Error("api call went wrong");
      }
      const articles = await response.json();
      const articleData = articles;
      setNewsAPIData(articleData);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="search-bar-container" onSubmit={handleSearchResults}>
        <input
          className="search-bar"
          placeholder="Write your topic here!"
          type="text"
          name="news-search-bar"
          onChange={handleSearchBar}
          defaultValue={search}
        />
        <button className="submit-btn" type="submit">
          search here
        </button>
      </form>
    </>
  );
}

// exporting the component
export default NewsSearchBar;
