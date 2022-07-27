import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { freeToPlayGamesApiOptions } from '../utils/fetchData'

import GamesSection from '../components/Home/GamesSection'

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const GamesByCategory = () => {

  const { cat } =  useParams()

  const [gamesList, setGamesList] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const fetchGamesList = async () => {
      setLoading(true)
      try {
        const url=`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`
        const response = await fetch(url, freeToPlayGamesApiOptions)
        const gamesData = await response.json()
        if (response.ok) {
          setLoading(false)
          setGamesList(gamesData)
          setNotFound(false)
        }
        else {
          setNotFound(true)
        }
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchGamesList()
  }, [cat])

  return (
    <>
      {
        notFound ? 
        <Stack alignItems='center' justifyContent='center' p='200px' minHeight='100vh'>
          <Typography marginTop='40px' sx={{ color:'secondary.light300' }}>
            Sorry nothing can be found here
          </Typography>
        </Stack> :
        <Box marginTop='40px'>
          <GamesSection allGames={gamesList} isLoading={loading} gamesPerPage={16} />
        </Box>
      }
    </>
  )
}

export default GamesByCategory