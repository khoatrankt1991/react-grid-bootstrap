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
    render() { console.log(this.props);
        const percentComplete = this.props.value + '%';
        
        return !this.props.editable?(<div className="progress" style={{marginTop: '20px'}}>
                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
                    {percentComplete}
                    </div></div>):(!this.state.isActived?<div onClick={this.handleOnClick.bind(this)} className="progress" style={{marginTop: '20px'}}>
                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
                    {percentComplete}
                    </div></div>:<div><input type="text" ref="txt" onKeyPress={this.handleChange.bind(this)}/></div>)
  }
}
module.exports = {
    PercentComplete: PercentCompleteFormatter
}