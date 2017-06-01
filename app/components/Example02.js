import React from 'react';
import ReactDataGrid from 'react-data-grid';
//a minion records
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
class Example02 extends React.Component {
     constructor(props) {
          super(props);
          let rows = [];
          for (let i =0; i< 1000000; i++) {
               rows.push({
                       id: i,
                       task: 'Task ' + i,
                       complete: 30,
                       priority: 'Critical',
                       issueType: 'Bug',
                       startDate: '2017/12/12',
                       completeDate: '2017/12/12'
                 })
          }
          var header =  [
               {key: 'id',name: 'ID',width: 80},
               {key: 'task',name: 'Title'},
               {key: 'priority',name: 'Priority'},
               {key: 'issueType',name: 'Issue Type'},
               {key: 'complete',name: '% Complete', formatter: PercentCompleteFormatter},
               {key: 'startDate',name: 'Start Date'},
               {key: 'completeDate',name: 'Expected Complete'} ];
          this.state = {
               _rows: rows,
               _columns: header
          }
     }
     getRandomDate(start, end) {
       return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
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
module.exports = Example02;
