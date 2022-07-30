import { useState } from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

import { Link } from 'react-router-dom'

const menuItems = [
  'Shooter',
  'Anime',
  'Action',
  'Strategy',
  'Fantasy',
  'Moba',
  'Racing',
  'Social',
  'Sports',
  'MMORPG',
  'Battle-Royale',
  'Card',
  'Fighting',
  'Sandbox',
  'Open-World',
  'survival',
  'Low-spec',
  'Horrer'
]

const NavigationMenu = ({ setIsDrawerOpen }) => {

  const [anchorElement, setAnchcorElement] = useState(null)

  const open = Boolean(anchorElement)

  const handleClick = (e) => {
    setAnchcorElement(e.currentTarget)
  }

  const handleCLose = () => {
    setIsDrawerOpen(oldValue => !oldValue)
    setAnchcorElement(null)
  }

  const handleHideDrawer = () => {
    setIsDrawerOpen(false)
    setAnchcorElement(null)
  }

  return (
    <>
      <Button 
        color='inherit'
        id='recources-button'
        onClick={handleClick} 
        aria-controls={open ? 'resources-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        endIcon={<KeyboardArrowDown />}
        variant='text'
        sx={{
          color:'secondary.light200',
          fontSize: '1rem',
          textTransform: 'none',
          fontWeight: '400',
          ':hover': {
            color: 'secondary.light100'
          },
        }}
        disableRipple
      >
        Browser Popular Genre/Tags
      </Button>    
      <Menu
        id='resources-menu'
        anchorEl={anchorElement}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'resources-button'
        }}
        onClose={handleCLose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        disableScrollLock
      >
        {
          menuItems.map((item) => (
            <MenuItem 
              key={item}
              onClick={handleHideDrawer}
              sx={{
                color: 'secondary.light200',
                ':hover': {
                  bgcolor: 'primary.dark900'
                },
              }}
            >
              <Link 
                to={`/games/${item.toLowerCase()}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {item}
              </Link>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  )
}

export default NavigationMenu