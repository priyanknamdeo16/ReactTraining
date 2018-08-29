import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import SettingIcon from '@material-ui/icons/Settings';
class Header extends Component{
    state = {
        value: 0,
      };
      handleChange = (event, value) => {
        this.setState({ value });
      };
        render(){
            return(
                <React.Fragment>
                    <div className="App-header">
                        Customer Management System
                    </div>
                    <div>
                    <Paper square style={{height: 70}}>
                        <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        fullWidth
                        indicatorColor="secondary"
                        backgroundColor= "#3f51b5"
                        textColor="secondary"
                        >
                       <Tab className="tabWidth" icon={<PersonIcon />} label={'Customers'}/>
                       <Tab className="tabWidth" icon={<SettingIcon />} label={'Settings'}/>
                       <Tab style={{marginLeft: 920}} label={'LogOut'} />
                        </Tabs>
                    </Paper>
                    </div>
                </React.Fragment>

            )
        }
}


export default Header