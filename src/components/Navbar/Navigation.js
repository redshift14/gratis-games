import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

import NavigationMenu from './NavigationMenu'

const Navigation = ({setIsDrawerOpen, isSmallWindow}) => {
  return (
    <Stack 
      direction={{ md: 'row', xs: 'column' }} 
      spacing={{ md: 2, xs: 1 }} 
      divider={ isSmallWindow ? 
        <Divider flexItem light sx={{width: '100%', borderColor: 'secondary.light200'}} />
        : null
      }
      sx={{
        width: {
          xs: '100%',
          md: 'max-content'
        }
      }}
      alignItems='center'
    >
      <Link 
        to='/'
        component={RouterLink}
        color='secondary.light200'
        underline='none'
        variant='subtitle1'
        sx={{
          ':hover': {
            color: 'secondary.light100'
          },
        }}
        onClick={() => setIsDrawerOpen(false)}
      >
        Browse all Games
      </Link>
      <NavigationMenu />
    </Stack>
  )
}

export default Navigation