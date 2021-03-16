import './App.css';
import React, { useEffect, useState } from 'react'
import AxiosNews from './Components/AxiosNews/AxiosNews';
import RecipeReview from './Components/RecipeReview/RecipeReview';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([])
  useEffect(() =>{
    const url = ('http://newsapi.org/v2/everything?q=apple&from=2021-03-05&to=2021-03-05&sortBy=popularity&apiKey=648a47f69b5046a590f3e4960a2e5418')
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  return (
    <div>
    
      {
        articles.map(article => <AxiosNews article={article}></AxiosNews>)
      }
      {
        articles.map(article => <RecipeReview article={article}></RecipeReview>)
      }
    </div>
  );
}

export default App;
