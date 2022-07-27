import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const SystemRequirements = ({ gameDetails }) => {
  return (
    <Stack spacing={1} flex={1.3}>
      <Typography
        variant='h5'
        component='h6'
        color='secondary.light400'
        gutterBottom
        fontWeight={500}
      >
        { `Minimum System Requirements (${gameDetails.platform})` }
      </Typography>
      <Divider />
      {
        gameDetails.platform.includes('Window') ?
        <Stack 
          direction={{ md: 'row', xs: 'column' }} 
          justifyContent='space-between' 
          spacing={2}
        >
          <Stack spacing={2}>
            <Box>
              <Typography color='secondary.light400'>OS</Typography>
              <Typography color='secondary.light300' fontWeight={500}>
                {gameDetails.minimum_system_requirements.os}
              </Typography>
            </Box>
            <Box>
              <Typography color='secondary.light400'>Memory</Typography>
              <Typography color='secondary.light300' fontWeight={500}> 
                {gameDetails.minimum_system_requirements.memory}
              </Typography>
            </Box>
            <Box>
              <Typography color='secondary.light400'>Storage</Typography>
              <Typography color='secondary.light300' fontWeight={500}>
                {gameDetails.minimum_system_requirements.storage}
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Box>
              <Typography color='secondary.light400'>Processor</Typography>
              <Typography color='secondary.light300' fontWeight={500}>
                {gameDetails.minimum_system_requirements.processor}
              </Typography>
            </Box>
            <Box>
              <Typography color='secondary.light400'>Graphics</Typography>
              <Typography color='secondary.light300' fontWeight={500}>
                {gameDetails.minimum_system_requirements.graphics}
              </Typography>
            </Box>
          </Stack>
        </Stack> :
        <Typography
          variant='body1'
          component='p'
          color='secondary.light400' 
          lineHeight='25px'
          align='justify'
        >
          {
            `${gameDetails.title} is a browser based game and should run smoothly on practically any PC with a updated web-browser.

            If you have old hardware or software, you may still be able to play ${gameDetails.title} Universe, but your game experience may suffer. For the best gameplay experience, we recommend the latest versions of Firefox, Chrome, or Microsoft Edge.`
          }
        </Typography>
      }
    </Stack>
  )
}

export default SystemRequirements