import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Blog from './components/Blog/Blog.jsx'
import Home from './components/Home/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>

    {/* this elements are now in the layout sandwich.So no need to defne '/blog' and '/dashboard' */}
    <Route path='' element={<Home/>} />
    <Route path='blog' element={<Blog/>}/>
    <Route path='dashboard' element={<Dashboard/>} />
  </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
