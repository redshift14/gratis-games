import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { freeToPlayGamesApiOptions } from '../utils/fetchData'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Oval } from 'react-loader-spinner'

import MainPart from '../components/Details/MainPart'
import AboutSection from '../components/Details/AboutSection'
import BottomSection from '../components/Details/BottomSection'

const Details = () => {

  const { id } = useParams()

  const [gameDetails, setGameDetails ]= useState({})
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  
  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true)
      try {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
        const response = await fetch(url, freeToPlayGamesApiOptions)
        const gameData = await response.json()
        if (response.ok) {
          setLoading(false)
          setGameDetails(gameData)
          setNotFound(false)
        }
        else {
          setNotFound(true)
        }
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchGameDetails()
  }, [])

  return (
    <>
      {
        notFound ? 
        <Stack alignItems='center' justifyContent='center' p='200px' minHeight='100vh'>
          <Typography marginTop='40px' sx={{ color:'secondary.light300' }}>
            Sorry nothing can be found here
          </Typography>
        </Stack> :
        <>
          {
            loading ? 
            <Stack alignItems='center' justifyContent='center' p='200px' minHeight='100vh'>
              <Oval color='#b0bec5'secondaryColor='#78909c'/>
            </Stack> :
            <Box
              sx={{
                backgroundImage: `url('${gameDetails.screenshots[0].image}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundColor: 'black',
              }}
            >
              <Box
                sx={{
                  padding: {
                    xs: '40px 20px',
                    sm: '40px',
                    md: '40px 60px',
                    lg: '40px 80px',
                  },
                  backgroundColor: 'rgba(38, 50, 56, 0.9)',
                  height: '100%',
                  width: '100%',
                  minHeight: '95vh'
                }}
              >
                <MainPart gameDetails={gameDetails} />
                <AboutSection gameDetails={gameDetails} />
                <BottomSection gameDetails={gameDetails} />
              </Box>
            </Box>
          }
        </>
      }
    </>
  )
}

export default Details