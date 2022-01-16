import './Selection.css';
import { FormControl } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import React from 'react';

export const Selection = () => {

    const classes = [
        { label: 'FullStack Developer 2020/2022'},
        { label: 'FullStack Developer 2021/2023'},
        { label: 'BigData 2020/2022'},
        { label: 'BigData 2021/2023'}
    ];
  
    return(
            <FormControl className="inputLabel" sx={{ m: 1, minWidth: "80%"}}>
                <Autocomplete
                    className="selectionSelect"
                    disablePortal
                    id="combo-box-demo"
                    options={classes}
                    renderInput={(params) => <TextField className="inputClasses"  placeholder="Select Class" {...params}/>}
                />
            </FormControl>
    );
}