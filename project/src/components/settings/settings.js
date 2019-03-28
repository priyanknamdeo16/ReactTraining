import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SettingsActionCreator from '../../actions/tabActions';
import styled from 'styled-components';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddEditSettings from './addEditSettings';



class SettingsComponent extends Component {
    componentDidMount() {
        this.props.tabIndexChnage.tabChange(2);
    }
    render() {
        return (
            <div>
                {/* <TableHead>
                    <TableRow>
                        <TableCell>Announcement Name</TableCell>
                        <TableCell>Announcement Start</TableCell>
                        <TableCell>Announcement End</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Downtime Start</TableCell>
                        <TableCell>Downtime End</TableCell>
                    </TableRow>
                </TableHead> */}
                <AddEditSettings/>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    tabIndexChnage: bindActionCreators(SettingsActionCreator, dispatch)
})
export default connect(null, mapDispatchToProps)(SettingsComponent);