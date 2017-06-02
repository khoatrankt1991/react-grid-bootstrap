import React from 'react';

class PercentCompleteFormatter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActived: false,
            value: this.props.value
        }
    }
    handleOnClick () {
        this.setState({isActived: true}); 
    }
    handleChange(e) {
        if(e.key != 'Enter') return;
        var {onSave} = this.props;
        onSave(this.props.rowIdx, this.state.value);
        this.setState({isActived: false});
    }
    handleOnBlur() {
        this.setState({isActived: false});
    }
    handleOnChange(e) {
        this.setState({value: e.target.value});
    }
    render() { //console.log(this.props);
        const percentComplete = this.props.value + '%';
        var colorcss = "progress-bar-striped " +
        ["progress-bar-danger", "progress-bar-warning", "progress-bar-info", "progress-bar-success"][parseInt(this.props.value * 4/100)];
        return !this.props.editable?(<div className="progress" style={{marginTop: '20px'}}>
                    <div className={colorcss} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
                    {percentComplete}
                    </div></div>):(!this.state.isActived?<div onClick={this.handleOnClick.bind(this)} className="progress" style={{marginTop: '20px'}}>
                    <div className={colorcss} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
                    {percentComplete}
                    </div></div>:<div><input type="text" value={this.state.value} onChange={this.handleOnChange.bind(this)} autoFocus="true" onBlur={this.handleOnBlur.bind(this)} onKeyPress={this.handleChange.bind(this)}/></div>)
  }
}

class ButtonFormatter extends React.Component {
    handleClick() {
        var {rowIdx, value , onClickMe} = this.props;
        onClickMe(rowIdx, value);
    }
    render() {
        return <button onClick={this.handleClick.bind(this)} style={{padding: '0px 12px'}} className={this.props.css}>{this.props.children}</button>
    }
}


module.exports = {
    PercentComplete: PercentCompleteFormatter,
    Button: ButtonFormatter
}