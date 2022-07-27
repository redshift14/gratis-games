import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'

const SortingSelectMenu = ({ sortingOptions, selectedSortingOption, handleSortingChange }) => {
  return (
    <FormControl fullWidth sx={{ minWidth: '150px' }}>
      <InputLabel id='options-select-label' sx={{ color:'secondary.light300' }}>
        Sort by
      </InputLabel>
      <Select
        labelId='options-select-label'
        label="Sort by"
        width='100%'
        value={selectedSortingOption}
        onChange={handleSortingChange}
      >
        {
          sortingOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Typography sx={{ color:'secondary.light300' }}>{option}</Typography>
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default SortingSelectMenu