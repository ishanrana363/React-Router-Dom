import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css';
import Home from './component/home/Home.jsx';
import About from './component/about/About.jsx';
import Contack from './component/contact/Contack.jsx';
import Users from './component/Users/Users.jsx';
import Userdetails from './component/Userdetails/Userdetails.jsx';
import Posts from './component/posts/Posts.jsx';
import Postdetails from './component/post-details/Postdetails.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    children : [
      {
        path:"/about",
        element : <About></About>
      },
      {
        path:"/contact",
        element : <Contack/>
      },
      {
        path : "/user",
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users" ),
        element : <Users/>
      },
      {
        path : "/user/:userid",
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`) ,
        element : <Userdetails></Userdetails>
      },
      {
        path:"/posts",
        loader : ()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        element : <Posts></Posts>
      },
      {
        path:"/post-details/:id",
        loader : ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element : <Postdetails/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
