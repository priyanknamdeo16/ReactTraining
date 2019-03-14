import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RoutesConstants from '../../constants/route.constants';
import { bindActionCreators } from 'redux';
import * as adminActionsCreater from '../../actions/manageAdminHandler';
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

  
class AdminList extends Component{
    componentDidMount(){
     this.props.tabIndexChnage.tabChange(1);
    }
    render() {
        const rows = this.props.adminList;
        return (
            <div>
                <Paper style={styles.root}>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
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
                {/* <Link to={RoutesConstants.CUSTOMERS_ADD_EDIT.path} 
                    onClick={() => {this.props.adminActions.onCustomersSelected(row)}}> */}
                {row.name}
                {/* </Link> */}
                </TableCell>
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
        )
    }
}

const mapStateToProps = (state) => ({
    adminList : state.admin.adminList
});

const mapDispatchToProps = (dispatch) => ({
    adminActions: bindActionCreators(adminActionsCreater, dispatch),
    tabIndexChnage: bindActionCreators(SettingsActionCreator, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminList));