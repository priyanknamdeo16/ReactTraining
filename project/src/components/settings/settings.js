import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SettingsActionCreator from '../../actions/tabActions';

class SettingsComponent extends Component{
    componentDidMount(){
        this.props.tabIndexChnage.tabChange(1);
    }
    render(){
        return (
            <div>settings component here</div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    tabIndexChnage: bindActionCreators(SettingsActionCreator, dispatch)
})
export default connect(null, mapDispatchToProps)(SettingsComponent);