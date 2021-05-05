import React from 'react';
//IMPORT MUI COMPONENTS
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const SelectDropdown = ({setSelectedFunction}) => {
    return ( 
        <FormControl variant="outlined">
            <InputLabel id="label">Kodespråk</InputLabel>
            <Select
                labelId="label"
                id="select"
                defaultValue="javascript"
                onChange={(e) => setSelectedFunction(e.target.value)}
                label="language"
            >
                <MenuItem value="javascript">JavaScript</MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="php">PHP</MenuItem>
                <MenuItem value="dart">Dart</MenuItem>
                <MenuItem value="go">Go</MenuItem>
            </Select>
        </FormControl>
     );
}
 
export default SelectDropdown;