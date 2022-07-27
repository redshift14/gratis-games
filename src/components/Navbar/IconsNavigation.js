import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import SearchIcon from '@mui/icons-material/Search'
import GitHubIcon from '@mui/icons-material/GitHub'

const IconsNavigation = () => {
  return (
    <Stack direction='row' spacing={1}>
      <Link to='search' component={RouterLink} color='secondary.light200'>
        <Tooltip title='Advanced Search' arrow>
          <IconButton color='inherit'>
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Link>
      <Link 
        color='secondary.light200'
        href='https://github.com/redshift14'
        target='_blank'
        rel='noreferrer'
      >
        <Tooltip title='Developer Github' arrow>
          <IconButton color='inherit' size='small'>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Link>
    </Stack>
  )
}

export default IconsNavigation