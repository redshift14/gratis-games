import Navbar from './components/Navbar'
import Home from './pages/Home'
import AdvancedSearch from './pages/AdvancedSearch'
import Footer from './components/Footer'
import Details from './pages/Details'
import GamesByCategory from './pages/GamesByCategory'

import { AllGamesListProvider } from './components/context/AllGamesListContext'
import { theme } from './utils/themeObject'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import { ThemeProvider } from '@mui/material/styles'

import './App.css'

const App = () => {
  return (
    <>
      <React.StrictMode>
        <Router>
          <ThemeProvider theme={theme}>
            <AllGamesListProvider>
              <Navbar />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/search' element={<AdvancedSearch />} />
                  <Route exact path='/:id' element={<Details />} />
                  <Route path='/games/:cat' element={<GamesByCategory />} />
                </Routes>
              <Footer />
            </AllGamesListProvider>
          </ThemeProvider>
        </Router>
      </React.StrictMode>
    </>
  )
}

export default App