import ShowCase from '../components/Home/ShowCase'
import ControlsSection from '../components/Home/ControlsSection'
import GamesSection from '../components/Home/GamesSection'

import Divider from '@mui/material/Divider'

import { useAllGamesList, useLoadingContext } from '../components/context/AllGamesListContext'

const Home = () => {

  const allGames = useAllGamesList()
  const isLoading = useLoadingContext()

  return (
    <>    
      <ShowCase />
      <ControlsSection />
      <Divider sx={{ marginBottom: '40px' }} />
      <GamesSection allGames={allGames} isLoading={isLoading} gamesPerPage={12} />
    </>
  )
}

export default Home