import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const InputField = (props) => {
    return(
        <TextField
          id={props.id}
          label={props.label}
          // className={classes.textField}
          value={props.val}
        //   onChange={this.handleChange('name')}
          margin="normal"
        />
        
    )
}

export default InputField