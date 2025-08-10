import Footer from './Components/Footer'
import Header from './Components/Header'
import MainRoutes from './route'
import './Styles/main.scss'
import './Styles/common.css'
import './Styles/header.css'
import './Styles/blog.scss'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './Context/AppContext'

export default function App() {

  return (
    <AppContextProvider>
      <BrowserRouter basename='/'>
        <div className='app bg-gradient-to-r from-[#ff6e7f] to-[#bfe9ff]'>
          <Header />
          <main className='main mt-20' >
            <MainRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContextProvider >
  )
}
