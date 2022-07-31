// imports section
// import react and use context
import React, { useContext } from "react";
// import the news api context to pass over the state
import { newsAPI } from "../App";
// import css
import "./news-cards.css";

function NewsCards() {
  const { newsAPIData, loading, setLoading } = useContext(newsAPI);
  // using a set time out that way you can actually see the loading animation
  setTimeout(() => {
    // creating some state to activate the cards
    if (loading === true) {
      setLoading(false);
    }
  }, 1000);
  return (
    <>
      {loading === false
        ? newsAPIData.map((newsData, index) => {
            return (
              <div key={index} className="news-card-container">
                <img
                  className="news-image-card"
                  src={newsData.urlToImage}
                  alt="news article"
                ></img>
                <div className="news-card-text-container">
                  <p className="news-card-text">{newsData.title}</p>
                  <p className="news-card-text">Author: {newsData.author}</p>
                  <p className="news-card-text">{newsData.description}</p>
                  <a
                    className="news-card-link"
                    href={newsData.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here To View The Article
                  </a>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}

export default NewsCards;
