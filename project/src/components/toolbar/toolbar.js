import React, {Component} from 'react';
import { Button, Toolbar } from '../../../node_modules/@material-ui/core';
import RoutesConstants from '../../constants/route.constants';
import { Link} from 'react-router-dom';

class ToolbarComponent extends Component{
    render() {
        return(
            <Toolbar>
          <Button variant="outlined">
                <Link to={RoutesConstants.CUSTOMERS_ADD_EDIT.path}>
                    Add Customer
                </Link>
                    
                </Button>
        </Toolbar>
        )
    }
}


export default ToolbarComponent;