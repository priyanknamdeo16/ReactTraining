import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as adminActionCreators from '../../actions/manageAdminHandler';
import * as SettingsActionCreator from '../../actions/tabActions';
import ManageAdminView from './ManageAdminView';
import RoutesConstants from '../../constants/route.constants';
import ToolbarComponent from '../toolbar/toolbar';

class ManageAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            lname: '',
            address: '',
            userName: '',
            id: '',
            email: '',
            country: '',
            stateInCountry: '',
            city: '',
        };

     this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
   
    handleSubmitForm(event) {
       event.preventDefault();
        const formData = {},
            adminList = this.props.adminList;
        
        for (let i = 0; i < 9; i++) { //to do change to  each
            formData[event.target[i].name] = event.target[i].value
        }
        adminList.push(formData);
        this.props.adminCreationAction.addEditAdmin(adminList);
        this.props.history.push('/Admins');
    }
   
    render() {
        return (
            <ManageAdminView onSaveAdmin = {this.handleSubmitForm}  />
        );
    }
}

const mapStateToProps = (state) => ({
    adminList: state.admin.adminList

});

const mapDispatchToprops = (dispatch) => ({
    adminCreationAction : bindActionCreators(
        adminActionCreators, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(ManageAdmin));