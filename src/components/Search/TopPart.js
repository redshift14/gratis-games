import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const TopPart = ({ handleClearAllFilters }) => {
  return (
    <>
      <Typography
        variant='h4'
        component='h1'
        color='secondary.light400'
        gutterBottom
        fontWeight={600}
      >
        Advanced Games Search
      </Typography>
      <Stack 
        direction={{ md: 'row', xs: 'column' }} 
        justifyContent={{ md: 'space-between', xs: 'flex-start' }}
        alignItems='flex-start'
      >
        <Typography color='secondary.light400' variant='body1' component='p' marginBottom='20px'>
          Find exactly what you are looking for!
        </Typography>
        <Button 
          variant='text' 
          sx={{ 
            color: 'secondary.light300', 
            textTransform: 'none',
            '&:hover': {
              color: 'secondary.light200'
            },
          }}
          startIcon={<HighlightOffIcon />}
          onClick={handleClearAllFilters}
        >
          Clear filters
        </Button>
      </Stack>
      <Divider />
    </>
  )
}

export default TopPart