import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const SelectField = () => {
    return(
        <Select
            value={props.age}
            onChange={props.handleChange}
            inputProps={}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {/* this will be moved to loop further */}
            <MenuItem value={}></MenuItem>
            <MenuItem value={}></MenuItem>
            <MenuItem value={}></MenuItem>
          </Select>
        
    )
}

export default SelectField

