import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RoutesConstants from '../../constants/route.constants';
import { bindActionCreators } from 'redux';
import * as userActionsCreater from '../../actions/customersHandler';
import * as SettingsActionCreator from '../../actions/tabActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ToolbarComponent from '../toolbar/toolbar';

const styles = {
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    }
  };

  
class CustomersList extends Component{
    componentDidMount(){
      this.props.tabIndexChnage.tabChange(0);
    }
    render() {
        const rows = this.props.customersList;
        let toolbar;
        toolbar =   (this.props.location.pathname === '/customers') ? (<ToolbarComponent tabPath={RoutesConstants.CUSTOMERS_ADD_EDIT.path} displayName='Add Customer'/>) : null;    
        return (<React.Fragment>
          {toolbar}
            <div>
                <Paper style={styles.root}>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Customer Type</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Domain Name</TableCell>
            <TableCell>Address 1</TableCell>
            <TableCell>Address 2</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                <Link to={RoutesConstants.CUSTOMERS_ADD_EDIT.path} 
                    onClick={() => {this.props.customersActions.onCustomersSelected(row)}}>
                {row.name}
                </Link>
                </TableCell>
                <TableCell>{row.customerType}</TableCell>
                <TableCell>{row.domainName}</TableCell>
                <TableCell >{row.address1}</TableCell>
                <TableCell >{row.address2}</TableCell>
                <TableCell >{row.city}</TableCell>
                <TableCell >{row.state}</TableCell>
                <TableCell >{row.country}</TableCell>
                <TableCell >{row.mobile}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    customersList : state.customers.customerList
});

const mapDispatchToProps = (dispatch) => ({
    customersActions: bindActionCreators(userActionsCreater, dispatch),
    tabIndexChnage: bindActionCreators(SettingsActionCreator, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersList));