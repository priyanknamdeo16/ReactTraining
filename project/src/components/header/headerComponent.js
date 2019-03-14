import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import SettingIcon from '@material-ui/icons/Settings';
import {Link, withRouter} from 'react-router-dom';
import RouteConstants from '../../constants/route.constants';

class Header extends Component{
        render(){
            console.log(this.props.tabState);
            return(
                <React.Fragment>
                    <div className="App-header">
                        Customer Management System
                    </div>
                    <div>
                    <Paper square style={{height: 70}}>
                        <Tabs
                        value={this.props.tabState}
                        fullWidth
                        indicatorColor="secondary"
                        textColor="secondary"
                        >
                       <Tab className="tabWidth" icon={<PersonIcon />} 
                                component={Link} to={RouteConstants.CUSTOMERS_LIST.path}
                                label={'Customers'}>
                       </Tab>
                       <Tab className="tabWidth" icon={<PersonIcon />} 
                                component={Link} to={RouteConstants.ADMIN_LIST.path}
                                label={'Admin'}>
                       </Tab>
                       <Tab className="tabWidth" icon={<SettingIcon />} 
                            component={Link} to={RouteConstants.CUSTOMERS_SETTINGS.path}
                            label={'Settings'}>
                       </Tab>
                       <Tab label={'LogOut'}>
                       </Tab>
                        </Tabs>
                    </Paper>
                    </div>
                </React.Fragment>

            )
        }
}

export const mapStateToProps = (state) => ({
    tabState : state.tabs.tabIndex
});

export default withRouter(connect(mapStateToProps, null)(Header));