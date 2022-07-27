import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import MainLogo from './MainLogo'
import Navigation from './Navbar/Navigation'
import IconsNavigation from './Navbar/IconsNavigation'

const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const theme = useTheme()

  const isSmallWindow = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>    
      <AppBar position="static" sx={{ bgcolor:'primary.dark900' }}>
        <Toolbar
          sx={{
            padding: '15px 20px',
            display: 'flex',
            gap:'10px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <MainLogo chosenVariant='h5' isLink={true} />
          {
            !isSmallWindow && <>
              <Navigation setIsDrawerOpen={setIsDrawerOpen} isSmallWindow={isSmallWindow} />
              <IconsNavigation />
            </>
          }
          {
            isSmallWindow && 
            <IconButton 
              size='large' 
              edge='start' 
              color='secondary' 
              aria-label='logo'
              onClick={() => setIsDrawerOpen(oldValue => !oldValue)}
              sx={{
                zIndex: 1000000
              }}
            >
              {
                isDrawerOpen ? <CloseIcon /> : <MenuIcon />
              }
            </IconButton>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => {setIsDrawerOpen(false)}}
      >
        <Stack
          spacing={3}
          bgcolor='primary.dark900'
          sx={{
            height: '100%',
            minWidth: '50vw',
            width: {
              xs: '100vw',
              sm: '50vw'
            },
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '60px 40px 40px 40px'
          }}
          divider={<Divider flexItem />}
        >
          {
            isSmallWindow &&
            <>
              <Navigation setIsDrawerOpen={setIsDrawerOpen} isSmallWindow={isSmallWindow} />
              <IconsNavigation />
            </>
          }
        </Stack>
      </Drawer>
    </>
  )
}

export default Navbar