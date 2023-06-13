import React, {useState } from 'react'
import Data from '../Others/Data.json'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import avatar2 from './avatar2.png';

export default function Footer() {
  const [count] = useState(3);
  
  return (
    <div className='boxes'>
            <p>Related Posts</p>
      <div className='latest-home'>
      {
          Data.filter((item)=> {return item.category==="food" }).map((article, index)=>{          
            
            if(index<count){
              return(
                <>
            <div className='latest2' key={index}>
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
              <div className='avatar-content'>
                <Avatar src={avatar2} className='av'/>
                <div className='avatar-cont'>
                   <p>WRITTEN BY:</p>
                   <p>Akansha Verma</p>
                   <p style={{fontWeight:"100", color:"gray"}}>{article.publishedAt}</p>
                </div>
             </div>
           </div>
          </>
           ) }
})   
        }
        </div>
    
    </div>
  )
}
