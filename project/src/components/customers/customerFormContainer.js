import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/customersHandler';
import { withRouter } from "react-router-dom";
import CustomerFormComponent from './customerFormComponent';
import customerslist from "../customerslist/customerslist";
import formValidations from '../../utils/formValidations';

class CustomerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerType: '',
      domainName: '',
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      mobile: '',
      errors: {},
      formValid : false
    };


    this.onSelection = this.onSelection.bind(this);
    this.saveCustomerDetails = this.saveCustomerDetails.bind(this);
    //this.validateForm = this.validateForm.bind(this);

  }

  // validateForm(){
  //  let errors = {};
  //   let formIsValid = true;
  //   if(!this.state['domainName']){
  //     formIsValid = false;
  //     errors['domainName'] = 'Please enter domain name';
  //   }
  //   this.setState({
  //     errors : errors
  //   });
  //   return formIsValid;
  // }


  onSelection(event){
    const field = event.target.name;
    this.setState({[field ]: event.target.value });
    if(this.props.selectedCustomer && this.props.selectedCustomer[field] !== event.target.value){
      this.props.selectedCustomer[field] = event.target.value;
    }

  }

  saveCustomerDetails(event) {
    const errorMessages = {};
    const customerData = {
      customerType: this.state.customerType,
      domainName: this.state.domainName,
      name: this.state.name,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      mobile: this.state.mobile,
    }
    const customersList = this.props.customers;
    let isFormValid = true;

    if(this.props.selectedCustomer){
      for (let i = 0; i< customersList.length; i ++) {
        if(this.props.selectedCustomer.domainName === customersList[i].domainName) {
          customersList[i] = this.props.selectedCustomer;
        }
      }
    }
    else{
      for (let i = 0; i< 9; i ++) {
      if(formValidations(event.target[i].name, event.target[i].value) === false) {
        isFormValid = false;
        errorMessages[event.target[i].name] = '*Invalid ' + event.target[i].name + '. Please Re-enter.'
    }
    customerData[event.target[i].name] = event.target[i].value
   }
    }
this.setState({formValid: isFormValid} , () => {
    if(this.state.formValid) {
      customersList.push(customerData);
      this.props.customerAction.addEditCustomer(customersList);
      this.props.history.push('/customers');
    }
    else {
        this.setState({errors : errorMessages})
    }
});
}

  render() {
    let errors = this.state.errors;
    return (
      <CustomerFormComponent selectedCustomer ={this.props.selectedCustomer} onSaveDetails= {this.saveCustomerDetails} onSelection={this.onSelection}/>
    );
  }
}

const mapStateToProps = (state) => ({
    customers: state.customers.customerList,
    selectedCustomer: state.customers.selectedCustomer
  });
  
  const mapDispatchToProps = (dispatch) => ({
    customerAction: bindActionCreators(
        userActionCreators, dispatch)
  });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerForm));
