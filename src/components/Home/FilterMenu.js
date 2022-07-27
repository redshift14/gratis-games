import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import ListItemIcon from '@mui/material/ListItemIcon'

import { useState } from 'react'

import { 
  useAllGamesList, 
  useAllGamesUpdateList, 
  useAllGamesUpdateListBackup 
} from '../context/AllGamesListContext'

const FilterMenu = ({ 
  options, optionText, filterByPlatform, filterByGenre, sorting 
}) => {

  const allGames = useAllGamesList()
  const setAllGames = useAllGamesUpdateList()
  const allGamesBackup = useAllGamesUpdateListBackup()

  const [anchorElement, setAnchcorElement] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  const open = Boolean(anchorElement)

  const handleClickListItem = (e) => {
    setAnchcorElement(e.currentTarget)
  }

  const handleMenuItemClick = (e, index) => {
    setSelectedIndex(index)
    setAnchcorElement(null)

    const selectedOption = e.target.childNodes[0].data

    if (!selectedOption.includes('All')) {

      if (filterByPlatform) {
        const searchedGames = allGamesBackup.filter((game) => {
          return game.platform.includes(selectedOption)
        })
          setAllGames(searchedGames)
        }
        else if (filterByGenre) {
          const searchedGames = allGamesBackup.filter((game) => {
            return game.genre.includes(selectedOption)
          })
          setAllGames(searchedGames)  
        }

        if (sorting) {
          if (selectedOption === 'Release Date') {
            const sortByDate = () => {
              const copy = [...allGamesBackup]
              copy.sort((a,b) => {
                return (
                  new Date(a.release_date).getTime() > new Date(b.release_date).getTime ? 1: -1
                )
              })
              setAllGames(copy)
            }
            sortByDate()
          }
          else if (selectedOption === 'Alphapetical') {
            const sortByName = () => {
              const copy = [...allGamesBackup]
              copy.sort((a,b) => a.title.localeCompare(b.title))
              setAllGames(copy)
            }
            sortByName()
          }
          else if (selectedOption === 'Relevance') {
            setAllGames(allGamesBackup)
          }
        }
      }
      else {
        setAllGames(allGamesBackup)
      }
  }

  const handleClose = () => {
    setAnchcorElement(null)
  }

  return (
    <>
      <List
        component="nav"
        sx={{ 
          bgcolor: 'secondary.dark900', color: 'secondary.light100'
        }}
        onChange={() => console.log('changed')}
      >
        <ListItem
          button
          id="lock-button"
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={optionText}
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        disableScrollLock
      >
        {
          options.map((option, index) => (
            <MenuItem 
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{
                color: 'secondary.light200',
                ':hover': {
                  bgcolor: 'primary.dark900'
                },
              }}
            >
              {option}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  )
}

export default FilterMenu