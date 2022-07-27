import React, { useState, useContext, useEffect } from 'react'

import { freeToPlayGamesApiOptions } from '../../utils/fetchData'

const allGamesListContext = React.createContext()
const allGamesListUpdateContext = React.createContext()
const allGamesBackupListContext = React.createContext()
const loadingContext = React.createContext()

export const useAllGamesList = () => {
  return useContext(allGamesListContext)
}

export const useAllGamesUpdateList = () => {
  return useContext(allGamesListUpdateContext)
}

export const useAllGamesUpdateListBackup = () => {
  return useContext(allGamesBackupListContext)
}

export const useLoadingContext = () => {
  return useContext(loadingContext)
}

export const AllGamesListProvider = ({ children }) => {
  const [allGamesList, setAllGamesList] = useState([])
  const [allGamesListBackup, setAllGamesListBackup] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAllGames = async () => {
      setLoading(true)
      try {
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
        const response = await fetch(url, freeToPlayGamesApiOptions)
        const gamesData = await response.json()

        if (response.ok) {
          setLoading(false)
          setAllGamesList(gamesData)
          setAllGamesListBackup(gamesData)
        }
      }
      catch (err) {
        console.log(err)
      }    
    }
    fetchAllGames()
  }, [])

  return (
    <allGamesListContext.Provider value={allGamesList}>
      <allGamesListUpdateContext.Provider value={setAllGamesList}>
        <allGamesBackupListContext.Provider value={allGamesListBackup}>
          <loadingContext.Provider value={loading}>
            { children }
          </loadingContext.Provider>
        </allGamesBackupListContext.Provider>
      </allGamesListUpdateContext.Provider>
    </allGamesListContext.Provider>
  )
}