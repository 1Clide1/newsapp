// creating the fetch for the news api
export const searchNews = (search) => {
  return fetch(
    // search is what will represent what the user types into the input when searching for the news
    `https://newsapi.org/v2/everything?q=${search}&sortBy=relevancy&language=en&apiKey=b885c3224cbe4e0481c802d772e9e546`
  );
};
