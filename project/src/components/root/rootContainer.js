import React, {Component} from 'react';
import Header from '../header/headerComponent';
import RoutesConstants from '../../constants/route.constants';
import { connect } from 'react-redux';
import * as userActionsCreater from '../../actions/customersHandler'; 
import * as adminActionsCreater from '../../actions/manageAdminHandler'; 
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import ToolbarComponent from '../toolbar/toolbar';

class Root extends Component{
    componentDidMount(){
        this.props.customersAction.getCustomers(); //get customers list 
        this.props.adminAction.getAdminList(); //get admins list
    }
    render(){
        let toolbar;
    //     if(this.props.tabIndex === 0) {
    //          toolbar =  <ToolbarComponent tabPath={RoutesConstants.CUSTOMERS_ADD_EDIT.path} displayName='Add Customer'/>;
    //     }
    //     if(this.props.tabIndex === 1) {
    //         toolbar =  <ToolbarComponent tabPath={RoutesConstants.ADMIN_ADD_EDIT.path} displayName='Add Admin'/>;
    //    }
    console.log('current location is>>>', this.props.location.pathname);
    toolbar =   (this.props.location.pathname === '/customers') ? (<ToolbarComponent tabPath={RoutesConstants.CUSTOMERS_ADD_EDIT.path} displayName='Add Customer'/>) : null;
        return(<React.Fragment>
            <Header />
            {toolbar}
            <Route exact  path="/" render={ ()=> <Redirect to={RoutesConstants.CUSTOMERS_LIST.path} />} />
            <Route path={RoutesConstants.CUSTOMERS_LIST.path} exact 
                    component={RoutesConstants.CUSTOMERS_LIST.component}/>
            <Route path={RoutesConstants.ADMIN_LIST.path} exact 
                    component={RoutesConstants.ADMIN_LIST.component}/>
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
const mapStateToProps = (state) => ({
   // tabIndex: state.tabs.tabIndex
});
const mapDispatchToProps = (dispatch) => ({
    customersAction: bindActionCreators(userActionsCreater, dispatch),
    adminAction : bindActionCreators(adminActionsCreater, dispatch)
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));