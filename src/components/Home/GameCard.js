import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

import {Link} from 'react-router-dom'

import WebAssetIcon from '@mui/icons-material/WebAsset'
import Windows10Icon from '../../resources/windows-10.png'

const GameCard = ({ gameDetails }) => {

  return (
    <Box sx={{ display: 'flex', justifyItems:'center'}}>
      <Card sx={{ 
        backgroundColor: 'secondary.dark900',
        ':hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.5s ease-in-out',
        },
        cursor: 'pointer'
      }}>
        <Link to={`/${gameDetails.id}`} style={{ textDecoration: 'none' }}>
        <CardMedia 
          component='img'
          height='160'
          image={gameDetails.thumbnail}
          alt={gameDetails.title}
        />
        <CardContent sx={{ padding: '20px' }}>
          <Typography 
            variant='h6' 
            component='h5' 
            color='secondary.light100'
            noWrap={true}
            sx={{
              overFlow: 'hidden',
              display: 'inline-block',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '235px'
            }}
          >
            {gameDetails.title}
          </Typography>
        </CardContent>
        </Link>
        <Divider />
        <CardActions sx={{ padding: '20px' }}>
          <Stack direction='row' justifyContent='space-between' width='100%' alignItems='center'>
            <Stack direction='row' gap='10px' alignItems='center'>
              <Typography variant='caption' color='secondary.light100' sx={{ cursor:'text' }}>
                {gameDetails.genre}
              </Typography>
              {
                gameDetails.platform.includes('Windows') ? 
                <Tooltip title='Available on Window'>
                  <img src={Windows10Icon} style={{ width: '20px', height: '20px' }} />
                </Tooltip> :
                <Tooltip title='Available in Browser'>
                  <WebAssetIcon style={{ color:'#eceff1' }} />
                </Tooltip>
              }
            </Stack>
            <Button 
              variant='contained'
              sx={{
                backgroundColor: 'secondary.light300',
                color: 'primary.dark900',
                '&:hover': {
                  backgroundColor: 'secondary.light200'
                },
              }}
              href={gameDetails.game_url}
              target='_blank'
              rel='noreferrer'
            >
              Play now
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  )
}

export default GameCard