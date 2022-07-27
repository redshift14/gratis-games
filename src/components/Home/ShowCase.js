import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import HeaderImage from '../../resources/cod-wz.webp'

const gradient = 'linear-gradient(to right, #83a8c9, #546e7a)'

const ShowCase = () => {

  return (
    <Box
      sx={{
        backgroundImage: `url('${HeaderImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: 'center'
      }}
    >
      <Box 
        sx={{
          padding: {
            xs: '90px 20px',
            sm: '120px 20px',
            lg: '150px 20px',  
            xl: '170px 0'
          },
          backgroundColor: 'rgba(0,0,0,0.7)',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        <Typography
          variant='h1' 
          component='h1' 
          color='secondary.light100'
          sx={{
            fontSize: {
              xs: '20px',
              sm: '28px',
              md: '40px',
              xl: '60px'
            },
            textAlign: 'center',
          }}
        >
          Rich selection of 
          <Typography 
            variant='h1' 
            component='span' 
            sx={{ 
              backgroundImage: `${gradient}`,
              backgroundSize: '100%',
              backgroundRepeat: 'repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: {
                xs: '20px',
                sm: '28px',
                md: '40px',
                xl: '60px'
              }
            }}
          > free to play </Typography> games
        </Typography>
        <Button 
          variant='contained' 
          sx={{ 
            width: 'max-content',
            backgroundImage: `${gradient}`,
            padding: {
              lg: '10px 20px',
              xl: '14px 24px'
            },
            color: 'primary.dark900',
            fontSize: {
              xs: '12px',
              md: '18px',
              xl: '20px'
            }
          }}
          href='#games'
        >
          Browse Games
        </Button>
      </Box>
    </Box>
  )
}

export default ShowCase