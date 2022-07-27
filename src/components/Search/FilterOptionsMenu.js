import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import CheckBox from '@mui/material/Checkbox'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

const FilterOptionsMenu = ({ 
  handleCheckBoxChange, selectedOptions, checkBoxesOptions, mainLabel
}) => {
  return (
    <FormControl>
      <FormLabel sx={{ color:'secondary.light300', marginBottom: '5px' }}>
        { mainLabel }
      </FormLabel>
      <Divider />
      <Box sx={{ maxHeight: '200px', overflowY: 'scroll' }}>
        <FormGroup sx={{ marginTop: '10px' }}>
          {
            checkBoxesOptions.map((option) => (
              <FormControlLabel
                label={option.label}
                key={option.id}
                sx={{ color:'secondary.light300' }}
                control={
                  <CheckBox
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={
                      handleCheckBoxChange
                    }
                    size='small'
                    sx={{ color:'secondary.light300' }}
                  />
                }
              />
            ))
          }
        </FormGroup>
      </Box>
    </FormControl>
  )
}

export default FilterOptionsMenu