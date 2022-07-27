import { useState } from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const ImagesGallery = ({ gameDetails }) => {

  return (
    <Stack flex={1}>
      <Typography
        variant='h5'
        component='h6'
        color='secondary.light400'
        gutterBottom
        fontWeight={500}
        marginBottom='16.5px'
      >
        Screenshots
      </Typography>
      <Divider />
      <Grid container>
      {
        gameDetails.screenshots.map((screenshot) => (
          <Grid 
            item
            key={screenshot.id} 
            sx={{
              cursor:'pointer'
            }}
            onClick={() => window.open(screenshot.image)}
            xs={12}
            md={6}
          >
            <img
              src={screenshot.image}
              width='100%'
              loading='lazy'
            />
          </Grid>
        ))
      }
      </Grid>
    </Stack>
  )
}

export default ImagesGallery