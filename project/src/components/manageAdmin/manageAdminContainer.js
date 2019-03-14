import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as adminActionCreators from '../../actions/manageAdminHandler';
import * as SettingsActionCreator from '../../actions/tabActions';
import ManageAdminView from './ManageAdminView';

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
    componentDidMount() {
        this.props.tabIndexChange.tabChange(1);
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
        this.props.history.push('/');
    }
   
    render() {
        return (
            <ManageAdminView onSaveAdmin = {this.handleSubmitForm} tabIndex = '1' />
        );
    }
}

const mapStateToProps = (state) => ({
    adminList: state.admin.adminList
});

const mapDispatchToprops = (dispatch) => ({
    adminCreationAction : bindActionCreators(
        adminActionCreators, dispatch),
        tabIndexChange: bindActionCreators(SettingsActionCreator, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(ManageAdmin));