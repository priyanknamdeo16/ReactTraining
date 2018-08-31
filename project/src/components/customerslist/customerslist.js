import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RoutesConstants from '../../constants/route.constants';
import { bindActionCreators } from 'redux';
import * as userActionsCreater from '../../actions/customersHandler';
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
    render() {
        const rows = this.props.customersList;
        return (
            <div>
                <Paper style={styles.root}>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                <Link to={RoutesConstants.CUSTOMERS_ADD_EDIT.path} 
                    onClick={() => {this.props.customersActions.onCustomersSelected(row)}}>
                {row.id}
                </Link>
                  
                </TableCell>
                <TableCell numeric>{row.name}</TableCell>
                <TableCell numeric>{row.salary}</TableCell>
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
    customersActions: bindActionCreators(userActionsCreater, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersList));