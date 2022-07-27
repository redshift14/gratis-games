import { useState, useRef } from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import GameCard from './GameCard'

import { Oval } from 'react-loader-spinner'

const GamesSection = ({ allGames, isLoading, gamesPerPage }) => {

  const gamesGridRef = useRef(null)

  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  let currentGames
  if (allGames.length > 0) {
    currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame)
  }

  const paginate = (e, value) => {
    setCurrentPage(value)
    gamesGridRef.current.scrollIntoView()
  }

  return (
    <>
      {
        isLoading ? 
        <Stack alignItems='center' justifyContent='center' p='200px' minHeight='80vh'>
          <Oval color='#b0bec5'secondaryColor='#78909c'/>
        </Stack>
        :
        <Stack alignItems='center' sx={{ paddingBottom: '60px' }} id='games' ref={gamesGridRef}>
          <Grid 
            container
            alignItems='center'
            justifyContent='center'
            direction={{
              xs: 'column',
              sm: 'row'
            }}
            columnSpacing={{
              sm: 3,
              lg: 4
            }}
            rowSpacing={{
              xs: 4,
              sm: 4,
              lg: 4
            }}
            padding={{ 
              xs: '0 2px',
              sm: '0 20px',
              md: '0',
              lg: '0'
            }}
          >
            {
              currentGames ? 
              currentGames.map((game) => (
                <Grid item xs='auto' key={game.id} >
                  <GameCard gameDetails={game} />
                </Grid>
              ))
              : <Box>
                <Typography marginTop='40px' sx={{ color:'secondary.light300' }}>
                  Sorry No Games Where Found!
                </Typography>
              </Box>
            }
          </Grid>
          <Stack mt='100px' alignItems='center'>
              { 
                allGames.length > 9 && (
                  <Pagination
                    color='secondary'
                    shape='rounded'
                    variant='text'
                    defaultPage={1}
                    count={Math.ceil(allGames.length / gamesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size='medium'
                  />
                )
              }
            </Stack>
        </Stack>
      }
    </>
  )
}

export default GamesSection