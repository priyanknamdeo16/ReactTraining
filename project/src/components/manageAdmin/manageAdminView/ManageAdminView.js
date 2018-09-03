import React from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";


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
      name: 'yesha'
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(event) {
    console.log(event.target[0].value)
    event.preventDefault();
    //const data = new FormData(event.target);
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
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
            <Input ref="fname" id="name1" name="firstName" type="text" defaultValue={this.state.name} />
            <Label>Last Name</Label>
            <Input ref="lname" id="name2" name="lastName" type="text" />
            <Label>Address1:</Label>
            <Input name="add1" type="text" />
            <Label>UserName:</Label>
            <Input name="add2" type="text" />
            <Label>ID:</Label>
            <Input name="id" type="text" />
            <Label>Email:</Label>
            <Input name="email" type="text" />
            <Label>Country</Label>
            <Input name="country" type="text" />
            <Label>State</Label>
            <Input name="state" type="text" />
            <Label>City:</Label>
            <Input name="city" type="text" />
            <div>
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

export default withRouter(ManageAdminView);

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
