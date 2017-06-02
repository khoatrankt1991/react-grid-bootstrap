import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require('style-loader!css-loader!react-datepicker/dist/react-datepicker.css');

class KtDatePickerFormatter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            isActived: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.switchMode = this.switchMode.bind(this);
    }
    handleChange(date) {
        this.setState({
        startDate: date,
        isActived: false
        });
    }
    switchMode() {
        this.state.isActived = true;
        this.setState(this.state);
    }
    onClickOutside(){
        this.state.isActived = false;
        this.setState(this.state);
    }
    render() {
        if(!this.state.isActived) return <div onClick={this.switchMode.bind(this)}>{this.state.startDate.format("YYYY/MM/DD")}</div>
        return <DatePicker onClickOutside={this.onClickOutside.bind(this)} autoFocus="true" dateFormat="YYYY/MM/DD"
        selected={this.state.startDate}
        onChange={this.handleChange} calendarClassName="red-border"/>
    }
}
module.exports = KtDatePickerFormatter