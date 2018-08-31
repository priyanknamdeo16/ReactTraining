import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/customersHandler';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import CustomersContainer from './customerContainer'
import { withRouter } from "react-router-dom";
import RoutesConstants from '../../constants/route.constants';

const Button = styled.button`
background: palevioletred;
border-radius: 3px;
border: none;
width:100px;
padding: 10px;
color: white;`;

const Input = styled.input`
font-size: 16px;
margin-top: 10px;
width: 150px; 
height: 30px;`;

const Select = styled(Input)`
height: 35px;
`;

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
        mobile:' '
    };

    
this.onSelection = this.onSelection.bind(this);
this.saveCustomerDetails = this.saveCustomerDetails.bind(this);

  }

  onSelection(event){
    const field = event.target.name;
    this.setState({[field ]: event.target.value });
  }

  saveCustomerDetails(){
      this.props.customerAction.addEditCustomer({
          customer:{
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
      });
      return;
  }
 

  render() {

    
    return (
      <div>
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item xs>
            <label htmlFor="custId">Customer Type</label>
            <select name="customerType"
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
              value={this.state.customerType} onChange={this.onSelection}>
              <option> Select Customer </option>
              <option> Demo</option>
              <option> Premium</option>
            </select>
          </Grid>

          <Grid item xs>
            <label>Customer Name</label>
            <Input name="name"
              type="text" value={this.state.name} onChange={this.onSelection}
            />
          </Grid>
          <Grid item xs>
            <label>Domain Name</label>
            <Input
              type="text" name="domainName" value={this.state.domainName} onChange={this.onSelection}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item xs>
            <label>Address Line 1</label>
            <Input
              type="text" name="address1" value={this.state.address1} onChange={this.onSelection}
            />
          </Grid>
          <Grid item xs>
            <label>Address Line 2</label>
            <Input
              type="text" name="address2" value={this.state.address2} onChange={this.onSelection}
            />
          </Grid>
          <Grid item xs>
            <label>City </label>
            <Input
              type="text" name="city" value={this.state.city} onChange={this.onSelection}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item xs>
            <label>State </label>
            <select
              name="state" value={this.state.state} onChange={this.onSelection}
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}>
              <option>Select State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Delhi</option>
            </select>
          </Grid>
          <Grid item xs>
            <label>Country </label>
            <Input
              type="text" name="country" value={this.state.country} onChange={this.onSelection}
            />
          </Grid>
          <Grid item xs>
            <label>Mobile </label>
            <Input
              type="text" name="mobile" value={this.state.mobile} onChange={this.onSelection}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: 30 }} />
        <Grid container spacing={24} style={{ marginLeft: 8 }}>
          <Grid item>
            <Button>
            <Link to={RoutesConstants.CUSTOMERS_LIST.path} onClick={this.saveCustomerDetails}>Save</Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
            <Link to={RoutesConstants.CUSTOMERS_LIST.path} >Cancel</Link>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    customers: state.customers.customer
  });
  
  const mapDispatchToProps = (dispatch) => ({
    customerAction: bindActionCreators(
        userActionCreators, dispatch)
  });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerForm));
