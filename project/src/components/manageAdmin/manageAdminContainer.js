import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as adminActionCreators from '../../actions/manageAdminHandler';
import * as SettingsActionCreator from '../../actions/tabActions';
import ManageAdminView from './ManageAdminView';
import RoutesConstants from '../../constants/route.constants';
import ToolbarComponent from '../toolbar/toolbar';
import formValidations from '../../utils/formValidations';

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
            errors : {},
            formValid : false,
            
        };

     this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }
   
    handleSubmitForm(event) {
        event.preventDefault();
            const formData = {},
                 errorMessages = {},
                adminList = this.props.adminList;
            let isFormValid = true;

            for (let i = 0; i < 9; i++) { //to do change to  each
                if(formValidations(event.target[i].name, event.target[i].value) === false) {
                    isFormValid = false;
                    errorMessages[event.target[i].name] = '*Invalid ' + event.target[i].name + '. Please Re-enter.'
                }
                formData[event.target[i].name] = event.target[i].value
            }
            this.setState({formValid: isFormValid} , () => {
                if(this.state.formValid) {
                adminList.push(formData);
                this.props.adminCreationAction.addEditAdmin(adminList);
                this.props.history.push('/Admins');
                }
                else {
                    this.setState({errors : errorMessages})
                }
            });
    }
   
    render() {
        console.log('fprmmm>>>>', this.state.errors )
        return (
            <ManageAdminView onSaveAdmin = {this.handleSubmitForm} errorData = {this.state.errors} />
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