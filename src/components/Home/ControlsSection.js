import FilterMenu from './FilterMenu'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import SearchIcon from '@mui/icons-material/Search'

import { Link } from 'react-router-dom'

const plateformOptions = [
  'Filter by Plateform',
  'All Plateforms',
  'Windows',
  'Browser',
]
const plateformOptionsTitle = 'Filter by Plateform'

const genreOptions = [
  'Filter by Genre/Tag',
  'All genres',
  'Shooter',
  'Action RPG',
  'Strategy',
  'Fantasy',
  'Moba',
  'Racing',
  'Social',
  'Sports',
  'MMORPG',
  'Battle Royale',
  'Card',
  'Fighting',
  'MMO'
]

const genreOptionTitle = 'Or Filter by Genre/Tag'

const sortingOptions = [
  'Sort by',
  'Relevance',
  'Release Date',
  'Alphapetical'
]

const sortingOptionsTitle = 'Sort by'

const ControlsSection = () => {

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: 'center',        
        padding: {
          xs: 1,
          md: 1,
          lg: 2
        }
      }}
      flexDirection='row'
      bgcolor='secondary.dark900'
    >
      <Grid 
        container
        justifyContent={{
          xs: 'center',
          sm: 'space-between'
        }}
        direction={{
          xs: 'column',
          sm: 'row'
        }}
        alignItems="center"
        sx={{
          padding: '0 20px'
        }}
        columnSpacing={{
          sm: 2,
          lg: 1
        }}
      >
        <Grid item lg={2} sm={5} >
          <FilterMenu 
            options={plateformOptions} 
            optionText={plateformOptionsTitle} 
            filterByPlatform={true}
          />          
        </Grid>
        <Grid item lg={2} sm={5}>
          <FilterMenu 
            options={genreOptions} 
            optionText={genreOptionTitle}
            filterByGenre={true}
          />
        </Grid>
        <Grid item lg={2} sm={5}>
          <FilterMenu 
            options={sortingOptions} 
            optionText={sortingOptionsTitle} 
            sorting={true}
          />
        </Grid>
        <Grid item lg={3} sm={5}>
          <Button 
            variant='outlined'
            sx={{ 
              padding: {
                md: '12px',
                lg: '15px',
                xl: '16px 20px'
              },
              color: 'secondary.light100',
              fontSize: {
                xs: '12px',
                md: '14px',
                xl: '16px'
              },
              width: 'max-content',
              margin: {
                xs: '20px 0',
                sm: '0'
              },
            }}
            startIcon={<SearchIcon />}
          >
            <Link 
              to='search'
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              Advanced Search
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default ControlsSection