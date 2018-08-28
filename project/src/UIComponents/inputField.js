import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const inputField = () => {
    return(
        <TextField
          id={props.id}
          label={props.label}
          className={classes.textField}
          value={props.val}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        
    )
}

export default inputField