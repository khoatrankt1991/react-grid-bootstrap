import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require('style-loader!css-loader!react-datepicker/dist/react-datepicker.css');

class KtDatePickerFormatter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFormat: this.props.dateFormat==undefined?"YYYY/MM/DD":this.props.dateFormat,
            isActived: false}
    }
    handleChange(date) {
        this.disableEdit();
        var { onSave, rowIdx } = this.props;
        onSave(rowIdx , date.format(this.state.dateFormat));
    }
    enableEdit() {
        this.setState({isActived: true});
    }
    disableEdit(){
        this.setState({isActived: false});
    }
    render() {
        return!this.state.isActived?<div onClick={this.enableEdit.bind(this)}>{this.props.value}</div>
        :<DatePicker onClickOutside={this.disableEdit.bind(this)} autoFocus="true" dateFormat={this.state.dateFormat}
        selected={moment(this.props.value,this.state.dateFormat)}
        onChange={this.handleChange.bind(this)}/>
    }
}
module.exports = KtDatePickerFormatter