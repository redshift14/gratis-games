import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

const MainLogo = ({ chosenVariant, isLink }) => {
  return (
    <Typography
      variant={chosenVariant}
      component="h1"
      sx={{ 
        backgroundImage: 'linear-gradient(to right, #83a8c9, #546e7a)',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      fontWeight={700}
    >
      {
        isLink ? 
        <Link to='/' component={RouterLink} underline='none' style={{ cursor: 'pointer'}} >
          GratisGames
        </Link>
        : 'GratisGames'
      }
    </Typography>
  )
}

export default MainLogo