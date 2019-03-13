import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/customersHandler';
import { withRouter } from "react-router-dom";
import CustomerFormComponent from './customerFormComponent';

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
      mobile: ' '
    };


    this.onSelection = this.onSelection.bind(this);
    this.saveCustomerDetails = this.saveCustomerDetails.bind(this);

  }

  onSelection(event) {
    const field = event.target.name;
    this.setState({ [field]: event.target.value });
  }

  saveCustomerDetails() {
    const customer = {
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
    customersList.push(customer);
    this.props.customerAction.addEditCustomer(customersList);
  }
  render() {
    return (
      <CustomerFormComponent onSaveDetails={this.saveCustomerDetails} onSelection={this.onSelection} />
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers.customerList
});

const mapDispatchToProps = (dispatch) => ({
  customerAction: bindActionCreators(
    userActionCreators, dispatch)
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerForm));
