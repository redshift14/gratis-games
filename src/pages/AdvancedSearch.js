import { useState, useEffect } from 'react'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import TopPart from '../components/Search/TopPart'
import SortingSelectMenu from '../components/Search/SortingSelectMenu'
import FilterOptionsMenu from '../components/Search/FilterOptionsMenu'
import GamesSection from '../components/Home/GamesSection'

import { 
  sortingOptions, platforms, genres, graphics, combat, gameplay, setting, tags
} from '../utils/searchFiltersData'

import { freeToPlayGamesApiOptions } from '../utils/fetchData'

import { Oval } from 'react-loader-spinner'

const AdvancedSearch = () => {

  const [selectedSortingOption, setSelectedSortingOption] = useState('')
  const [selectedPlatforms, setSelectedPlatforms] = useState(['all'])
  const [selectedAllTags, setSelectedAllTags] = useState([])
  const [gamesList, setGamesList] = useState([])
  const [gamesListBackup, setGamesListBackup] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSortingChange = (e) => {
    setSelectedSortingOption(e.target.value)
    if (e.target.value === 'Release Date') {
      const sortByDate = () => {
        const copy = [...gamesList]
        copy.sort((a,b) => {
          return (
            new Date(a.release_date).getTime() > new Date(b.release_date).getTime ? 1: -1
          )
        })
        setGamesList(copy)
      }
      sortByDate()
    }
    else if (e.target.value === 'Alphapetical') {
      const sortByName = () => {
        const copy = [...gamesList]
        copy.sort((a,b) => a.title.localeCompare(b.title))
        setGamesList(copy)
      }
      sortByName()
    }
    else if (e.target.value === 'Relevance') {
      setGamesList(gamesListBackup)
    }
  }

  const handleFilterPlatformChange = (e, state, setState) => {
    const index = state.indexOf(e.target.value)
    if (index === -1) {
      setState([e.target.value])
    }
    else {
      setState(['all'])
    }
  }

  const handleFilterAllTagsChange = (e) => {
    const index = selectedAllTags.indexOf(e.target.value)
    if (index === -1) {
      setSelectedAllTags([...selectedAllTags, e.target.value])
    }
    else {
      setSelectedAllTags(selectedAllTags.filter(item => item !== e.target.value))
    }
  }

  const handleClearAllFilters = () => {
    setSelectedSortingOption('Relevance')
    setSelectedPlatforms(['all'])
    setSelectedAllTags([])
  }

  useEffect(() => {

    const individualAllTags = selectedAllTags.join('.')

    const fetchData = async () => {
      if (individualAllTags !== '') {
        try {
          const baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/filter'
          const params = `tag=${individualAllTags}&platform=${selectedPlatforms[0]}`
          const response = await fetch(`${baseUrl}?${params}`, freeToPlayGamesApiOptions)
          const gamesData = await response.json()
          if (response.ok) {
            setLoading(false)
            setGamesList(gamesData)
            setGamesListBackup(gamesData)
            setSelectedSortingOption('Relevance')
          }
        }
        catch (err) {
          console.log(err)
        }
      }
      else {
        setLoading(true)
        try {
          const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${selectedPlatforms[0]}`
          const response = await fetch(url, freeToPlayGamesApiOptions)
          const gamesData = await response.json()
          if (response.ok) {
            setLoading(false)
            setGamesList(gamesData)
            setGamesListBackup(gamesData)
            setSelectedSortingOption('Relevance')
          }
        }
        catch (err) {
          console.log(err)
        } 
      }
    }
    fetchData()
  }, [
    selectedPlatforms, selectedAllTags
  ])

  return (
    <>
      {
        loading ? 
        <Stack alignItems='center' justifyContent='center' p='200px' minHeight='80vh'>
          <Oval color='#b0bec5'secondaryColor='#78909c'/>
        </Stack>
        :
        <Box sx={{ padding: { xs: '30px 5px', md: '30px 20px'} }}>
          <TopPart handleClearAllFilters={handleClearAllFilters} />
          <Stack 
            direction={{ xs: 'column',  md: 'row'}} 
            spacing={{ md: 2 }}
            marginTop='40px'
          >
            <Stack 
              spacing={5} 
              bgcolor='secondary.dark900'
              padding={{ xs: '40px'}}
              sx={{ borderRadius: '5px', height: 'min-content', flex: 1}}
              marginBottom='40px'
            >
              <SortingSelectMenu 
                sortingOptions={sortingOptions}
                handleSortingChange={handleSortingChange}
                selectedSortingOption={selectedSortingOption}
              />
              <FilterOptionsMenu 
                checkBoxesOptions={platforms}
                selectedOptions={selectedPlatforms}
                handleCheckBoxChange={
                  (e) => handleFilterPlatformChange(e, selectedPlatforms, setSelectedPlatforms)
                }
                isPlatformMenu={true}
                mainLabel='Platform'
              />
              <FilterOptionsMenu 
                checkBoxesOptions={genres}
                selectedOptions={selectedAllTags}
                handleCheckBoxChange={
                  handleFilterAllTagsChange
                }
                isGenreMenu={true}
                mainLabel='Genre'
              />
              <FilterOptionsMenu 
                checkBoxesOptions={graphics}
                selectedOptions={selectedAllTags}
                handleCheckBoxChange={
                  handleFilterAllTagsChange
                }
                isGraphicsMenu={true}
                mainLabel='Graphics'
              />
              <FilterOptionsMenu 
                checkBoxesOptions={combat}
                selectedOptions={selectedAllTags}
                handleCheckBoxChange={
                  handleFilterAllTagsChange
                }
                isCombatMenu={true}
                mainLabel='Combat'
              />
              <FilterOptionsMenu 
                checkBoxesOptions={gameplay}
                selectedOptions={selectedAllTags}
                handleCheckBoxChange={
                  handleFilterAllTagsChange
                }
                isGameplayMenu={true}
                mainLabel='Gameplay'
              />
              <FilterOptionsMenu 
                checkBoxesOptions={setting}
                selectedOptions={selectedAllTags}
                handleCheckBoxChange={
                  handleFilterAllTagsChange
                }
                isSettingMenu={true}
                mainLabel='Setting'
              />
              <FilterOptionsMenu 
                checkBoxesOptions={tags}
                selectedOptions={selectedAllTags}
                handleCheckBoxChange={
                  handleFilterAllTagsChange
                }
                isTagsMenu={true}
                mainLabel='Tags'
              />
            </Stack> 
            <Box sx={{ flex: 8 }}>
              <GamesSection 
                allGames={gamesList} 
                isLoading={loading} 
                gamesPerPage={24}
                searchPage={true}
              />
            </Box>
          </Stack>
        </Box>
      }
    </>
  )
}

export default AdvancedSearch


          // console.log(`${individualGenres} ${individualGraphics} ${individualCombat} ${individualGameplay} ${individualSetting} ${individualTags}`)