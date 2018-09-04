import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as adminActionCreators from '../../../actions/manageAdminHandler';

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

class ManageAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lname: '',
      address: '',
      userName: '',
      id: '',
      email: '',
      country: '',
      state: '',
      city: ''
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    //const data = new FormData(event.target);
    // const formData = {};
    // for (const field in this.refs) {
    //   formData[field] = this.refs[field].value;
    // }
    const formData ={}
    console.log(event.target[2].value)
    for(let i =0; i<9; i++) {
      formData[event.target[i].name] = event.target[i].value
    }
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // this.setState ({
    //   [name]: value
    // });
    console.log(formData);
    this.props.manageAdminAction.addEditCustomer(formData);
  }
 
  render() {
    return (
      <React.Fragment>
        <Header align="center"><b>Manage Admin</b></Header>
        <Card>

          <Form onSubmit={this.handleSubmitForm}>
            <Label>First Name:</Label>
            {/* <input type="text" defaultValue={this.props.newName}
              onChange={this.onNameChanged} /> */}
            <Input ref="fname" id="name1" name="name" type="text" defaultValue={this.state.name} />
            <Label>Last Name</Label>
            <Input ref="lname" id="name2" name="lname" type="text" defaultValue={this.state.lname}/>
            <Label>Address:</Label>
            <Input id="add2" name="address" type="text" defaultValue={this.state.address}/>
            <Label>UserName:</Label>
            <Input name="userName" type="text" defaultValue={this.state.userName}/>
            <Label>ID:</Label>
            <Input name="id" type="text" defaultValue={this.state.id}/>
            <Label>Email:</Label>
            <Input name="email" type="text" defaultValue={this.state.email}/>
            <Label>Country:</Label>
            <Input name="country" type="text" defaultValue={this.state.country}/>
            <Label>State:</Label>
            <select
              name="state" defaultValue={this.state.state} 
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
            name="city" defaultValue={this.state.city} 
              style={{ fontSize: 16, marginTop: 10, width: 150, height: 30 }}>
              <option>Select City</option>
              <option>Pune</option>
              <option>Goa</option>
              <option>Bang</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
            </select>
            <div> <br/> <br/>
              <button
                >Save</button>
              <button
                >Cancel</button>
            </div>
          </Form>
        </Card>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  adminList: state.adminList
});

const mapDispatchToProps = (dispatch) => ({
  manageAdminAction: bindActionCreators(
    adminActionCreators, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageAdminView));

// import React from 'react';
// class ManageAdminView extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     console.log(data);
   
//   }

//   render() {
//     return (
//     	<div>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="username">Enter username</label>
//           <input  name="username" type="text" />

//           <label htmlFor="email">Enter your email</label>
//           <input  name="email" type="email" />

//           <label htmlFor="birthdGate">Enter your birth date</label>
//           <input name="birthdate" type="text" />

//           <button>Send data!</button>
//         </form>

//     	</div>
//     );
//   }
// }

// export default ManageAdminView;
