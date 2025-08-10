import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import MyServices from './Pages/MyServices/MyServices'
import MyWorks from './Pages/MyWorks/MyWorks'
import About from './Pages/About/About'
import Login from './Pages/Auth/Login'
import DeveloperTools from './Pages/Developer/DeveloperTools'
import DevBlog from './Pages/Developer/AllPages/DevBlog'
import DevProject from './Pages/Developer/AllPages/DevProject'
import DevJourney from './Pages/Developer/AllPages/DevJourney'

function MainRoutes() {
  useEffect(() => {

  })
  return (
    <Routes>
      <Route exact path='/Login' element={<Login />} />
      <Route exact path='/' element={<Home />} />
      <Route exact path='/personal_blog' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/myWorks' element={<MyWorks />} />
      <Route path='/myServices' element={<MyServices />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/developertools' element={<DeveloperTools />} />
      <Route path='/developertools/blogs' element={<DevBlog />} />
      <Route path='/developertools/projects' element={<DevProject />} />
      <Route path='/developertools/journeys' element={<DevJourney />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default MainRoutes
