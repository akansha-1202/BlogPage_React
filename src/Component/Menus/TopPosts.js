import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function TopPosts() {
    const [data, setData] = useState();//-->data from API
    const [loading, setLoading] = useState(false);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(3);

    const params = useParams();
    var titleString = params.category;
    titleString = titleString.toUpperCase();
    // const date = new Date();
    // const dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    useEffect(() => {

    // var url = 'https://newsapi.org/v2/everything?q=bollywood&from=2023-06-01&to=2023-06-01&sortBy=popularity&apiKey=d9ef585657a6408b8094c912d6c5fcee';

    // var url = 'https://newsapi.org/v2/everything?q=' + 
    //            params.category +
    //           '&from=' + 
    //            dateString +
    //           '&sortBy=popularity&apiKey=d9ef585657a6408b8094c912d6c5fcee';
    var url = 'https://webblog-by-akansha.onrender.com/' + params.category;

    // var req = new Request(url);

    // fetch(req).then((response) =>{
    //     response.json().then((data) => {
    //       setData(data);
    //       setLoading(true);
    //     console.log(data);        
    // });
    // });
    axios
      .get(url)
      .then((response) => {
          setData(response.data);
          setLoading(true);
    });
  }, [params]);

  if(loading){
  return (
    <div>  
        <h1 className='topPosts'>Top Posts</h1>
        {
          data.slice(18,28).map((article, index) => {
           // console.log(count, index);

            if(index<count1){
            return (
              <>
              <div className='article2' key={index}>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img className='img2' src={article.urlToImage} alt={article.title}/>
              </Link>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                  <div className='blog-details'>
                     <p className='category'>{titleString}</p>
                     <p className="published">{article.publishedAt}</p>
                   </div>
              </div>
              </>
              )}

              if(index<=count2){
                return(
              <div className='article3 ' key={index}>
                <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img className='img3' src={article.urlToImage} alt={article.title}/>
                </Link>

                  <div className='blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>                      

                  <div className='blog-details'>
                          <p className='category'>{titleString}</p>
                          <p className="published">{article.publishedAt}</p>
                      </div>
                  </div>
              </div>
                )}

          })
        }
        <div className='advertistment'>
            <h4>Advertistment</h4>
            </div>

    </div>
  );
  }
  else {
     return <h1>Loading...⭕</h1>
        }
}

//the encodeURIComponent() function--> used to encode the URL parameters (article.title and article.urlToImage) 
//                                     to ensure that special characters are properly handled.

