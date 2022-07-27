import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const AboutSection = ({ gameDetails }) => {
  return (
    <Stack spacing={2} sx={{ padding: '40px 5px'}}>
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: '28px',
              sm: '34px'
            }
          }}
          component='h5'
          color='secondary.light400'
          gutterBottom
          fontWeight={500}
        >
          { `About ${gameDetails.title}` }
        </Typography>
        <Divider />
      </Box>
      <Box>
        <Typography
          variant='body1'
          component='p'
          color='secondary.light400' 
          lineHeight='25px'
          align='justify'
        >
          { gameDetails.description }
        </Typography>
      </Box>
    </Stack>
  )
}

export default AboutSection