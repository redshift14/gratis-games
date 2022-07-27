import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import WebAssetIcon from '@mui/icons-material/WebAsset'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import Windows10Icon from '../../resources/windows-10-blueGray.png'

const MainPart = ({ gameDetails }) => {
  return (
    <Box paddingBottom='40px'>
      <Stack 
        direction={{
          xs: 'column',
          md: 'row'
        }} 
        justifyContent='space-between' 
        gap={{
          xs: '50px',
          lg: '20px'
        }}
      >
        <Box>
          <Typography 
            sx={{
              fontSize: {
                xs: '28px',
                sm: '34px',
                md: '44px'
              }
            }}
            component='h4'
            color='secondary.light400'
            gutterBottom
            fontWeight={700}
          >
            { gameDetails.title }
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            color='secondary.light400'
            gutterBottom
            fontWeight={600}
          >
            { gameDetails.short_description }
          </Typography>
          <Typography variant='body1' component='p' color='secondary.light400' gutterBottom>
            { `Release Date: ${gameDetails.release_date}` }
          </Typography>
          <Typography variant='body1' component='p' color='secondary.light400' gutterBottom>
            { `Developed by: ${gameDetails.developer}` }
          </Typography>
          <Typography variant='body1' component='p' color='secondary.light400' gutterBottom>
            { `Publised by: ${gameDetails.publisher}` }
          </Typography>
          <Stack direction='row' marginTop='20px' alignItems='center' spacing={2}>
            <Stack direction='row' alignItems='center'>
              <Typography
                variant='body2'
                component='p'
                color='secondary.light400'
                fontWeight={600}
              >
                { gameDetails.genre }
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Typography variant='body2' component='p'color='secondary.light400'>
                Available on
              </Typography>
              {
                gameDetails.platform.includes('Windows') ? 
                <img src={Windows10Icon} style={{ width: '20px', height: '20px' }} /> :
                <WebAssetIcon style={{ color:'#90a4ae' }} />
              }
            </Stack>
          </Stack>
        </Box>
        <Box 
          sx={{
            display: {
              xs: 'flex',
              md: 'block'
            },
            flexDirection: {
              xs: 'column'
            }
          }}
        >
          <img src={gameDetails.thumbnail} />
          <Stack direction='row' justifyContent='center' spacing={2} marginTop={2}>
            <Button 
              variant='contained'
              sx={{
                flex: 3,
                color: 'primary.dark900',
                backgroundColor: 'secondary.light300',
                '&:hover': {
                  backgroundColor: 'secondary.light200'
                },
              }}
              href={gameDetails.game_url}
              target='_blank'
              rel='noreferrer'
              endIcon={ <OpenInNewIcon /> }
            >
              Play Now
            </Button>
            <Button 
              variant='outlined'
              sx={{
                flex: 1,
                color: 'secondary.light300',
                borderColor:'secondary.light300',
                '&:hover': {
                  borderColor: 'secondary.light200',
                  color: 'secondary.light200'
                },
              }}
              href={gameDetails.freetogame_profile_url}
              target='_blank'
              rel='noreferrer'
            >
              Reviews
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default MainPart