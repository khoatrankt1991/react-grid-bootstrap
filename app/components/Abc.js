import React from 'react';
import ReactDataGrid from 'react-data-grid';

const PercentCompleteFormatter = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },

  render() {
    const percentComplete = this.props.value + '%';
    return (
      <div className="progress" style={{marginTop: '20px'}}>
        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: percentComplete}}>
          {percentComplete}
        </div>
      </div>);
  }
});

class Abc extends React.Component {
     constructor(props) {
          super(props);
          var rows = [];
          for (let i =0; i< 100; i++) {
               rows.push({
                       id: i,
                       task: 'Task ' + i,
                       complete: Math.min(100, Math.round(Math.random() * 110)),
                       priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
                       issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
                       startDate: 'aa',
                       completeDate: ''
                 })
          }
          var header =  [
               {key: 'id',name: 'ID',width: 80},
               {key: 'task',name: 'Title'},
               {key: 'priority',name: 'Priority'},
               {key: 'issueType',name: 'Issue Type'},
               {key: 'complete',name: '% Complete',formatter: PercentCompleteFormatter},
               {key: 'startDate',name: 'Start Date'},
               {key: 'completeDate',name: 'Expected Complete'} ];
          this.state = {
               _rows: rows,
               _columns: header
          }
     }

     rowGetter(i) {
          return this.state._rows[i]
     }
     render() {
          return (
                <ReactDataGrid
                  columns={this.state._columns}
                  rowGetter={this.rowGetter.bind(this)}
                  rowsCount={this.state._rows.length}
                  minHeight={500} />);
     }
}
module.exports = Abc;
