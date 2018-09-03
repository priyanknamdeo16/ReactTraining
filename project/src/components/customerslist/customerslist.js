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
        return (
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
                <TableCell numeric>{row.customerType}</TableCell>
                <TableCell component="th" scope="row">
                <Link to={RoutesConstants.CUSTOMERS_ADD_EDIT.path} 
                    onClick={() => {this.props.customersActions.onCustomersSelected(row)}}>
                {row.name}
                </Link>
                  
                </TableCell>
                <TableCell numeric>{row.domainName}</TableCell>
                <TableCell numeric>{row.address1}</TableCell>
                <TableCell numeric>{row.address2}</TableCell>
                <TableCell numeric>{row.city}</TableCell>
                <TableCell numeric>{row.state}</TableCell>
                <TableCell numeric>{row.country}</TableCell>
                <TableCell numeric>{row.mobile}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
            </div>
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