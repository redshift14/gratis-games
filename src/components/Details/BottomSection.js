import Stack from '@mui/material/Stack'

import SystemRequirements from './SystemRequirements'
import ImagesGallery from './ImagesGallery'

const BottomSection = ({ gameDetails }) => {
  return (
    <Stack 
      direction={{
        xs: 'column',
        lg: 'row'
      }} 
      justifyContent='space-between' 
      spacing={10}
    >
      <SystemRequirements gameDetails={gameDetails} />
      <ImagesGallery gameDetails={gameDetails} />
    </Stack>
  )
}

export default BottomSection