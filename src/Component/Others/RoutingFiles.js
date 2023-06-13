import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Menus/Home';
import PageNotFound from '../Menus/PageNotFound';
import NavBar from './NavBar';
import Articles from '../Menus/Articles';
import Details from '../Menus/Details';


export default function RoutingFiles() {
  return (
    <>
      <BrowserRouter>
         <NavBar/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/:category' element={<Articles/>}/>
             <Route path='/details/:title' element={<Details/>}/>
             <Route path='/details/:urlToImage' element={<Details/>}/>
             <Route path='*' element={<PageNotFound/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}
