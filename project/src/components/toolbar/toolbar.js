import React, {Component} from 'react';
import { Button, Toolbar, AppBar } from '../../../node_modules/@material-ui/core';
import RoutesConstants from '../../constants/route.constants';
import { Link} from 'react-router-dom';

const ToolbarComponent = (props)=>{
    
        console.log('>>>', props.tabPath)
        return(
            <AppBar position="static" color="default">
            <Toolbar>
                <Button variant="outlined">
                    <Link style={{textDecoration: 'none'}}to={props.tabPath}>
                        {props.displayName}
                </Link>
                </Button>
            </Toolbar>
            </AppBar>
        )
    }



export default ToolbarComponent;