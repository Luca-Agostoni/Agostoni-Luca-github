import './Selection.css';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import React from 'react';

export const Selection = () => {

    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
      setFilter(event.target.value);
    };
  
    return(
            <FormControl className="inputLabel" sx={{ m: 1, minWidth: "80%"}}>
                <Select
                className="selectionSelect"
                value={filter}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="" className="inputLabelClass">
                        <em>Class</em>
                    </MenuItem>
                    <MenuItem className="inputLabelOption" value={"FullStack Developer 2020/2022"}>FullStack Developer 2020/2022</MenuItem>
                    <MenuItem className="inputLabelOption" value={"FullStack Developer 2021/2023"}>FullStack Developer 2021/2023</MenuItem>
                    <MenuItem className="inputLabelOption" value={"BigData 2020/2022"}>BigData 2020/2022</MenuItem>
                    <MenuItem className="inputLabelOption" value={"BigData 2021/2023"}>BigData 2021/2023</MenuItem>
                </Select>
            </FormControl>
    );
}