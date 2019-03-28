import React, { Component } from 'react'
import styled from 'styled-components';
import DatePicker from './DatePicker';

const Form = styled.form`
  width: 80%;
  height: 700px;
  margin: 20px;
  padding: 2px 16px;
`;

const InputRadioWrapper = styled.input`
margin: 30px;
float: left;
`;

const ButtonWrapper = styled.div`
float: left;
position: relative;
top: 100px;
margin: 10px;
padding: 10px;
`;

const Label = styled.label`
height: 20px;
width: 200px;
margin-top: 30px;
margin-left: 45px;
text-align: right;
clear: both;
float:left;
margin-right:15px;
`;
const Header = styled.h3`
  text-align: center;
  background: lightgray;
  padding: 10px;
`;
const Input = styled.input`
font-size: 16px;
margin-top: 20px;
width: 250px;
height: 30px;`;
const ActionButton = styled.button`
background: gray;
border-radius: 3px;
border: none;
width:100px;
padding: 10px;
color: white;
font-size: 16px;
margin: 25px;`;

class AddEditSettings extends Component {
  render() {
    return (

      <React.Fragment>
        <Header align="center"><b>Manage Announcement</b></Header>
        <Form>
          <Label>Announcement Name:</Label>
          <Input />
          <Label>System Downtime Start:</Label>
          <span className="datePickerClass"><DatePicker /></span>
          <Label>System Downtime End:</Label>
          <span className="datePickerClass"><DatePicker /></span>
          <Label>Announcement Start:</Label>
          <span className="datePickerClass"><DatePicker /></span>
          <Label>Announcement End:</Label>
          <span className="datePickerClass"><DatePicker /></span>
          <Label>Configuration Status:</Label>
          <InputRadioWrapper name="status" type="radio" id="on" />
          <label className="radioButtonLabel" htmlFor="on">ON</label>
          <InputRadioWrapper name="status" type="radio" id="off" />
          <label className="radioButtonLabel" htmlFor="off">OFF</label>
          <ButtonWrapper>
            <ActionButton
            >Save</ActionButton>
            <ActionButton
            >Cancel</ActionButton>
          </ButtonWrapper>
        </Form>
      </React.Fragment>
    )
  }
}

export default AddEditSettings;