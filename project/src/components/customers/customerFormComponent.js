import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';
import {  Link } from "react-router-dom";
import RoutesConstants from '../../constants/route.constants';

const Button = styled.button`
background: gray;
border-radius: 3px;
border: none;
width:100px;
padding: 10px;
color: white;
font-size: 16px;
margin: 25px;`;

const Input = styled.input`
font-size: 16px;
margin-top: 10px;
width: 250px; 
height: 40px;`;

const Label = styled.label`
margin: 10px;
width: 100px;
font-size: 16px;`;


const CustomerFormComponent = (props) => {
    return(
        <div>
        <div className="customerForm">
        <div style={{background: 'lightgray', padding: '20px'}}>
        <label>Customer Form</label>
        </div>
        <Grid container spacing={24} style={{ marginLeft: '10%' , padding: 10}}>
          <Grid item xs = {3}>
          <div>
            <Label htmlFor="custId">Customer Type: </Label>
            </div>
            <select name="customerType"
              style={{ fontSize: 16, marginTop: 10, width: 250, height: 40 }} defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.customerType : props.customerType}
              value={props.customerType} onChange={props.onSelection}>
              <option> Select Customer </option>
              <option> Demo</option>
              <option> Premium</option>
            </select>
          </Grid>
          <Grid item xs = {3}>
          <div>
            <Label>Customer Name: </Label>
            </div>
            <Input name="name"
              type="text" defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.name : props.name} value={props.name} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs = {3}>
          <div>
            <Label>Domain Name: </Label>
            </div>
            <Input 
              type="email"  style={{ fontSize: 16, marginTop: 10, width: 250, height: 40 }}  name="domainName" defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.domainName : props.domainName} value={props.domainName} onChange={props.onSelection}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: '10%' , padding: 10}}>
          <Grid item xs = {3}>
          <div>
             <Label>Address Line 1: </Label>
            </div>
            <Input
              type="text" name="address1" defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.address1 : props.address1} value={props.address1} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs = {3}>
          <div>
            <Label>Address Line 2: </Label>
            </div>
            <Input
              type="text" name="address2" defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.address2 : props.address2} value={props.address2} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs = {3}>
          <div>
            <Label>City: </Label>
            </div>
            <Input
              type="text" name="city" value={props.city} onChange={props.onSelection} defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.city : props.city}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: '10%' , padding: 10}}>
          <Grid item xs = {3}>
          <div>
            <Label>State: </Label>
            </div>
            <select
              name="state" value={props.state} onChange={props.onSelection} defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.state : props.state}
              style={{ fontSize: 16, marginTop: 10, width: 250, height: 40 }} >
              <option>Select State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Delhi</option>
            </select>
          </Grid>
          <Grid item xs = {3}>
          <div>
            <Label>Country: </Label>
            </div>
            <Input
              type="text" name="country" value={props.country} defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.country : props.country} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs = {3}>
          <div>
            <Label>Mobile: </Label>
            </div>
            <Input
              type="phone" name="mobile" value={props.mobile} onChange={props.onSelection} defaultValue= {(props.selectedCustomer) ? props.selectedCustomer.mobile : props.mobile}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: 30 ,}} />
        <Grid container spacing={16} style={{ marginLeft: '10%' , padding: 10}}>
        <Grid item xs = {4}>
        </Grid>
          <Grid item xs = {4}>
            
          </Grid>
          <Grid item xs= {4}>
          <Button>
            <Link style={{color: 'white',
    textDecoration: 'none'}} to={RoutesConstants.CUSTOMERS_LIST.path} onClick={props.onSaveDetails}>Save</Link>
            </Button>
            <Button>
            <Link style={{color: 'white',
    textDecoration: 'none'}} to={RoutesConstants.CUSTOMERS_LIST.path} >Cancel</Link>
            </Button>
          </Grid>
        </Grid>
        </div>
      </div>
    )
}

export default CustomerFormComponent