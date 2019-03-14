import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import RoutesConstants from '../../constants/route.constants';
import ToolbarComponent from '../toolbar/toolbar';

const Form = styled.form`
  width: 80%;
  height: 700px;
  margin: 20px;
  padding: 2px 16px;
`;
const Input = styled.input`
  background: #f1efef94;
  color: black;
  margin: 20px 21px 50px 5px;
  width: 15%;
  height: 6%;
  border: none;
  border-radius: 3px;
`;
const Label = styled.label`
  display: inline-block;
  width: 7%;
`;
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90%;
  margin: auto;
  border-radius: 5px;
`;
const Header = styled.h3`
  text-align: center;
  background: light grey;
`;

const ManageAdminView = (props) => {
  let toolbar = '';
  if (props.tabindex === '1') {
    toolbar = <ToolbarComponent tabPath={RoutesConstants.ADMIN_ADD_EDIT.path} displayName='Add Admin'/>;
  }
  return (
    <React.Fragment> 
        <Header align="center"><b>Manage Admin</b></Header>
        {toolbar}
        <Card>
          <Form onSubmit={props.onSaveAdmin}>
            <Label>First Name:</Label>
            <Input  id="name1" name="name" type="text" value={props.name} />
            <Label>Last Name</Label>
            <Input  id="name2" name="lname" type="text" value={props.lname}/>
            {/* <Label>Address:</Label>
            <Input id="add2" name="address" type="text" defaultValue={props.address}/> */}
            <Label>UserName:</Label>
            <Input name="userName" type="text" value={props.userName}/>
            <Label>ID:</Label>
            <Input name="id" type="text" value={props.id}/>
            <Label>Email:</Label>
            <Input name="email" type="text" value={props.email}/>
            <Label>Country:</Label>
            <Input name="country" type="text" value={props.country}/>
            <Label>State:</Label>
            <select
              name="stateInCountry" value={props.stateInCountry} 
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}>
              <option>Select State</option>
              <option>Maharashtra</option>
              <option>MadhyaPradesh</option>
              <option>Karnataka</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
            </select>
            <Label>City:</Label>
            <select
            name="city" value={props.city} 
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}>
              <option>Select City</option>
              <option>Pune</option>
              <option>Goa</option>
              <option>Bang</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
            </select>
            <div> <br/> <br/>
              <button type ='submit'>
                Save</button>
              <button>
                Cancel</button>
            </div>
          </Form>
        </Card>
      </React.Fragment>
  )
}

export default withRouter(ManageAdminView);
