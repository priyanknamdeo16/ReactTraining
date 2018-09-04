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
font-size: 16px;`;

const Input = styled.input`
font-size: 16px;
margin-top: 10px;
width: 150px; 
height: 30px;`;

const Label = styled.label`
margin: 10px;
font-size: 16px;`;


const CustomerFormComponent = (props) => {
    return(
        <div>
        <Grid container spacing={24} style={{ marginLeft: 8 , padding: 30}}>
          <Grid item xs>
            <Label htmlFor="custId">Customer Type: </Label>
            <select name="customerType" required
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}
              value={props.customerType} onChange={props.onSelection}>
              <option> Select Customer </option>
              <option> Demo</option>
              <option> Premium</option>
            </select>
          </Grid>
          <Grid item xs>
            <Label>Customer Name: </Label>
            <Input name="name"
              type="text" value={props.name} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs>
            <Label>Domain Name: </Label>
            <Input
              type="email" name="domainName" value={props.domainName} onChange={props.onSelection}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: 8 , padding: 30}}>
          <Grid item xs>
            <Label>Address Line 1: </Label>
            <Input
              type="text" name="address1" value={props.address1} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs>
            <Label>Address Line 2: </Label>
            <Input
              type="text" name="address2" value={props.address2} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs>
            <Label>City: </Label>
            <Input
              type="text" name="city" value={props.city} onChange={props.onSelection}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24} style={{ marginLeft: 8 , padding: 30}}>
          <Grid item xs>
            <Label>State: </Label>
            <select
              name="state" value={props.state} onChange={props.onSelection}
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}>
              <option>Select State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Delhi</option>
            </select>
          </Grid>
          <Grid item xs>
            <Label>Country: </Label>
            <Input
              type="text" name="country" value={props.country} onChange={props.onSelection}
            />
          </Grid>
          <Grid item xs>
            <Label>Mobile: </Label>
            <Input
              type="phone" name="mobile" value={props.mobile} onChange={props.onSelection}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: 30 ,}} />
        <Grid container spacing={24} style={{ marginLeft: 100 , padding: 30}}>
          <Grid item>
            <Button>
            <Link style={{color: 'white',
    textDecoration: 'none'}} to={RoutesConstants.CUSTOMERS_LIST.path} onClick={props.onSaveDetails}>Save</Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
            <Link style={{color: 'white',
    textDecoration: 'none'}} to={RoutesConstants.CUSTOMERS_LIST.path} >Cancel</Link>
            </Button>
          </Grid>
        </Grid>
      </div>
    )
}

export default CustomerFormComponent