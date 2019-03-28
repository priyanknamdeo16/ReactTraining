import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import RoutesConstants from '../../constants/route.constants';
// import ToolbarComponent from '../toolbar/toolbar';

const Form = styled.form`
  width: 100%;
  height: 700px;
  margin: 20px;
  padding: 2px 16px;
`;
const Input = styled.input`
  background: #f1efef94;
  color: black;
  margin: 5px 15px 15px 0px;
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 3px;
  display: block;
`;
const Label = styled.label`
  display: inline-block;
  width: 70%;
  font-size: 16px;
  font-weight: bold;
`;
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90%;
  margin: auto;
  border-radius: 5px;
`;
const Header = styled.h3`
  text-align: left;
  background: light grey;
`;
const Button = styled.button`
background: gray;
border-radius: 3px;
border: none;
width:100px;
padding: 10px;
color: white;
font-size: 16px;
margin: 25px;`;

const Box = styled.div`
  display: inline-block;
  margin-left: 6%;
  margin-bottom: 20px;
  width: 25%
`;
const Error = styled.span`
  width: 64%;
  display: inline;
  float: left;
`;

const ButtonDiv = styled.div`
  width: 30%;
  float: right;
  margin-top: 100px;
`;

const ManageAdminView = (props) => {
  return (
    <React.Fragment> 
        <Card>
        <Header >
          <div className="formHeading">
          <label>Manage Admin</label>
          </div>
        </Header>

          <Form onSubmit={props.onSaveAdmin}>
          <Box>
            <Label>First Name: </Label>
            <Input  id="name1" name="name" type="text" value={props.name} required/>
            <Error>{props.errorData.name} </Error>
          </Box> 
          <Box>
            <Label>Last Name: </Label>
            <Input  id="name2" name="lname" type="text" value={props.lname} required/>
            {/* <Label>Address:</Label>
            <Input id="add2" name="address" type="text" defaultValue={props.address}/> */}
          </Box>
          <Box>
            <Label>UserName: </Label>
            <Input name="userName" type="text" value={props.userName}/>
          </Box>
          <Box>
            <Label>ID: </Label>
            <Input name="id" type="text" value={props.id}/>
          </Box>
          <Box>
            <Label>Email: </Label>
            <Input name="email" type="text" value={props.email} required/>
            <Error>{props.errorData.email} </Error>
          </Box>
          <Box>
            <Label>Country: </Label>
            <Input name="country" type="text" value={props.country}/>
          </Box>
          <Box>
            <Label>State: </Label>
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
          </Box>
          <Box>
            <Label>City: </Label>
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
          </Box>
            <ButtonDiv> <br/> <br/>
              <Button type ='submit'>
                Save</Button>
              <Button>
                Cancel</Button>
            </ButtonDiv>
          </Form>
        </Card>
      </React.Fragment>
  )
}

export default withRouter(ManageAdminView);
