import React from 'react';
import Data from "../Others/Data.json" 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='home-image-container'>
      <div className='images'>
        {
           Data.filter((item)=>{return item.category==="bollywood" && item.id===9}).map((article)=>(
              <div id='bollywood-image' key={article.id}>
                   <img src={article.urlToImage} alt={article.title}></img>
              </div>
           ))
        }
    
        {
            Data.filter((item)=>{return item.category==="food" && item.id===24}).map((article)=>(
                <div id='food-image' key={article.id}>
                    <img src={article.urlToImage} alt={article.title}></img>
                </div>
            ))
        }
      </div>
       {
             Data.filter((item)=>{return item.category==="hollywood" && item.id===5}).map((article)=>(
                 <div id='hollywood-image' key={article.id}>
                     <img src={article.urlToImage} alt={article.title}></img>
                </div>
            ))
        }
    </div>

     <div className="page-heading">The Latest <hr className="hr-under"/></div>
     <div className='latest-home'>
        <br/>
        {
          Data.filter((item)=> {return item.category==="bollywood" && item.id===6}).map((article)=>(
           <div className='latest2' key={article.id}>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
              <div className='content'>
                   <Link to={`/details/${article.title}`} state={article}>
                      <p>{article.title}</p>
                   </Link>
                   <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>

              </div>
          </div>
           ))   
        }

        {
          Data.filter((item)=> {return item.category==="food" && item.id===21}).map((article)=>(
           <div className='latest2' key={article.id}>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>               
               <div className='content'>
                   <Link to={`/details/${article.title}`} state={article}>
                      <p>{article.title}</p>
                   </Link>
                   <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>

              </div>
          </div>
         ))   
        }

 
        {
           Data.filter((item)=> {return item.category==="hollywood" && item.id===1}).map((article)=>(
            <div className='latest2' key={article.id}>
               <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>              
               <div className='content'>
                   <Link to={`/details/${article.title}`} state={article}>
                      <p>{article.title}</p>
                   </Link>
                   <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>

              </div>
            </div>
            ))   
        }
     </div>


   <div className='main-page'>
      <div className='latest'>
         <div className="page-heading"> Latest Articles <hr className="hr-under"/></div>
           { 
             Data.filter((item)=> {return item.category==="hollywood" && item.id===2}).map((article)=>(
             <div className='latest1' key={article.id}>
               <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
                <div className='blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                    <p className="content">{article.content}</p>
                    <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                    </div>
                </div>
              </div>
             ))
           }

           {
               Data.filter((item)=> {return item.category==="bollywood" && item.id===7}).map((article)=>(
              <div className='latest1' key={article.id}>
                <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
                 <div className='blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                    <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
             </div>
             ))
            }

            {
                Data.filter((item)=> {return item.category==="fitness" && item.id===17}).map((article)=>(
                <div className='latest1' key={article.id}>
                 <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
                 <div className='blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                    <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
               </div>
             ))
            }

            {
                 Data.filter((item)=> {return item.category==="food" && item.id===23}).map((article)=>(
                <div className='latest1' key={article.id}>
                   <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
                 <div className='blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                    <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
                </div>
               ))
             }

            {
                Data.filter((item)=> {return item.category==="technology" && item.id===13}).map((article)=>(
                <div className='latest1' key={article.id}>
                    <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
                 <div className='blog-content'>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                    <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
                </div>
              ))
            }
            {
            Data.filter((item)=>{return item.category==="bollywood" && item.id===9}).map((article)=>(
                <div className='big-image' key={article.id}>
                     <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                          <img src={article.urlToImage} alt={article.title}/>
                     </Link>
                </div>
            ))
        }
       </div>

    <div className='latest'>
        <div className='home-advertisement'>Advertisement</div>

        <div className="page-heading">Top Post <hr className="hr-under"/></div>
        
        {
        Data.filter((item)=> {return item.category==="bollywood" && item.id===10}).map((article)=>(

        <div className='article2'>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img className='img2' src={article.urlToImage} alt={article.title}/>
              </Link>
                  <Link to={`/details/${article.title}`} state={article}>
                    <p className='title'>{article.title}</p>
                  </Link>
                  <div className='blog-details'>
                     <p className='category'>{article.category}</p>
                     <p className="published">{article.publishedAt}</p>
                   </div>
         </div>
                     ))
         }

        {
            Data.filter((item)=> {return item.category==="hollywood" && item.id===4}).map((article)=>(
               <div className='article3 '>
               <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                 <img className='img3' src={article.urlToImage} alt={article.title}/>
               </Link>

                 <div className='blog-content'>
                 <Link to={`/details/${article.title}`} state={article}>
                   <p className='title'>{article.title}</p>
                 </Link>                      

                 <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
             </div>
           ))
          }

         {
            Data.filter((item)=> {return item.category==="bollywood" && item.id===8}).map((article)=>(
               <div className='article3 '>
               <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                 <img className='img3' src={article.urlToImage} alt={article.title}/>
               </Link>

                 <div className='blog-content'>
                 <Link to={`/details/${article.title}`} state={article}>
                   <p className='title'>{article.title}</p>
                 </Link>                      

                 <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
             </div>
           ))
          }
          {
            Data.filter((item)=> {return item.category==="technology" && item.id===13}).map((article)=>(
               <div className='article3 '>
               <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                 <img className='img3' src={article.urlToImage} alt={article.title}/>
               </Link>

                 <div className='blog-content'>
                 <Link to={`/details/${article.title}`} state={article}>
                   <p className='title'>{article.title}</p>
                 </Link>                      

                 <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>
                 </div>
             </div>
           ))
          }
         
      </div>
    </div>

    <div className="page-heading">Latest Stories<hr className="hr-under"/></div>
      <div className='latest-home'>
      <br/>
      {
          Data.filter((item)=> {return item.category==="fitness" && item.id===18}).map((article)=>(
           <div className='latest2' key={article.id}>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
              <div className='content'>
                   <Link to={`/details/${article.title}`} state={article}>
                      <p>{article.title}</p>
                   </Link>
                   <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>

              </div>
          </div>
           ))   
        }

{
          Data.filter((item)=> {return item.category==="food" && item.id===23}).map((article)=>(
           <div className='latest2' key={article.id}>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
              <div className='content'>
                   <Link to={`/details/${article.title}`} state={article}>
                      <p>{article.title}</p>
                   </Link>
                   <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>

              </div>
          </div>
           ))   
        }

       
{
          Data.filter((item)=> {return item.category==="bollywood" && item.id===7}).map((article)=>(
           <div className='latest2' key={article.id}>
              <Link to={`/details/${encodeURIComponent(article.urlToImage)}`} state={article}>
                  <img src={article.urlToImage} alt={article.title}/>
               </Link>
              <div className='content'>
                   <Link to={`/details/${article.title}`} state={article}>
                      <p>{article.title}</p>
                   </Link>
                   <p className="content">{article.content}</p>
                     <div className='blog-details'>
                         <p className='category'>{article.category}</p>
                         <p className="published">{article.publishedAt}</p>
                     </div>

              </div>
          </div>
           ))   
        }
    </div>
    
</>
  )
}

export default Home