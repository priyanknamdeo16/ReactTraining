import React, {Component} from 'react';
import Header from '../header/headerComponent';
import CustomerForm from '../customers/customerFormComponent'

class Root extends Component{
    render(){
        return(<React.Fragment>
            <Header />
            <CustomerForm />
            </React.Fragment>
        )
    }
}

export default Root