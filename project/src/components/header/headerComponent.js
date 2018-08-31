import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import SettingIcon from '@material-ui/icons/Settings';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component{
        render(){
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
                                component={Link} to="/customers"
                                label={'Customers'}>
                       </Tab>
                       <Tab className="tabWidth" icon={<SettingIcon />} 
                            component={Link} to="/settings"
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