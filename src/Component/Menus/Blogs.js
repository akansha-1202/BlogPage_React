import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Blogs() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(8);
    const [loading, setLoading] = useState(false);
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
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
      setLoading(true);
    });
  }, [params]);

  if(loading){
  return (
    <>
        <div className='main-container'>
        <h1 className='category-page-title-'>{titleString}</h1>
        {
          data.map((article, index) => {
           // console.log(count, index);

            if(index<count){
            return (
              <div className='category-article' key={index}>
                <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                     <img className='category-image' src={article.urlToImage} alt={article.title}/>
                </Link>
                {/* About encodeURIComponent() funtion given below */}

                 <div className='category-blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='category-title'>{article.title}</p>
                  </Link>
                    <p className="category-content">{article.content}</p>
                     <div className='category-blog-details'>
                         <p className='category'>{titleString}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
              </div>
            )
            }
          })
        }
        <button onClick={() => {setCount(count + 7)}}>Load More</button>
        </div>
    </>
  );
}
else {
   return <h1>Loading...⭕</h1>
      }
 
}

//the encodeURIComponent() function--> used to encode the URL parameters (article.title and article.urlToImage) 
//                                     to ensure that special characters are properly handled.
