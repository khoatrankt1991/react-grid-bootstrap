import React from 'react';

class PercentCompleteFormatter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActived: false
        }
    }
    handleOnClick () {
        this.setState({isActived: true}); 
    }
    handleChange(e) {
        if(e.key != 'Enter') return;
        var {onSave} = this.props;
        onSave(this.props.rowIdx, this.refs.txt.value);
        this.setState({isActived: false});
    }
    handleOnBlur() {
        this.setState({isActived: false});
    }
    render() { //console.log(this.props);
        const percentComplete = this.props.value + '%';
        var colorcss = "progress-bar ";
        this.props.value>50?colorcss+="progress-bar-success":colorcss+="progress-bar-danger";
        console.log(colorcss);
        return !this.props.editable?(<div className="progress" style={{marginTop: '20px'}}>
                    <div className={colorcss} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
                    {percentComplete}
                    </div></div>):(!this.state.isActived?<div onClick={this.handleOnClick.bind(this)} className="progress" style={{marginTop: '20px'}}>
                    <div className={colorcss} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
                    {percentComplete}
                    </div></div>:<div><input type="text" ref="txt" onBlur={this.handleOnBlur.bind(this)} onKeyPress={this.handleChange.bind(this)}/></div>)
  }
}
module.exports = {
    PercentComplete: PercentCompleteFormatter
}