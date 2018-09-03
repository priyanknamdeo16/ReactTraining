import React, {Component} from 'react';
import Header from '../header/headerComponent';
import RoutesConstants from '../../constants/route.constants';
import { connect } from 'react-redux';
import * as userActionsCreater from '../../actions/customersHandler'; 
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import ToolbarComponent from '../toolbar/toolbar';

class Root extends Component{
    componentDidMount(){
        this.props.customersAction.getCustomers();
    }
    render(){
        return(<React.Fragment>
            <Header />
            <ToolbarComponent/>
            <Route exact  path="/" render={ ()=> <Redirect to={RoutesConstants.CUSTOMERS_LIST.path} />} />
            <Route path={RoutesConstants.CUSTOMERS_LIST.path} exact 
                    component={RoutesConstants.CUSTOMERS_LIST.component}/>
            <Route path={RoutesConstants.CUSTOMERS_ADD_EDIT.path} 
                    component={RoutesConstants.CUSTOMERS_ADD_EDIT.component}/>
            <Route path={RoutesConstants.ADMIN_ADD_EDIT.path}
                    component={RoutesConstants.ADMIN_ADD_EDIT.component} />
            <Route path={RoutesConstants.CUSTOMERS_SETTINGS.path} 
                    component={RoutesConstants.CUSTOMERS_SETTINGS.component}/>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    customersAction: bindActionCreators(userActionsCreater, dispatch)
});
export default withRouter(connect(null, mapDispatchToProps)(Root));