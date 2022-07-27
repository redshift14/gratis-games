import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

import MainLogo from './MainLogo'

const Footer = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: 'primary.dark900',
          padding: '20px',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          gap: {
            xs: '20px'
          }
        }}
      >
        <MainLogo chosenVariant='h6' isLink={false} />
        <Typography
          textAlign='center'
          color='secondary.light300'
          variant='body1'
        >
          created by 
          <Link
            underline='none'
            sx={{ 
              backgroundImage: 'linear-gradient(to right, #83a8c9, #546e7a)',
              backgroundSize: '100%',
              backgroundRepeat: 'repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            href='https://redshift14.github.io/portfolio'
            target='_blank'
            rel='noreferrer'
          > Anas Arif</Link>
        </Typography>
        <Stack direction='row' spacing={1}>
          <Typography variant='body1'>
            <Link 
              underline='none'
              sx={{
                cursor: 'pointer',
                color:'secondary.light200',
                ':hover': {
                  color:'secondary.light100'
                }
              }}
              href='https://www.freetogame.com/api-doc'
              target='_blank'
              rel='noreferrer'
            >
              API
            </Link>
          </Typography>
          <Typography variant='body1'>
            <Link 
              underline='none'
              sx={{
                cursor: 'pointer',
                color:'secondary.light200',
                ':hover': {
                  color:'secondary.light100'
                }
              }}
            >
              Github
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Footer