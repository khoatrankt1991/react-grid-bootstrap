import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {PercentComplete} from 'CellFormatter';

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
               {key: 'complete',name: '% Complete',
                formatter: <PercentComplete editable="true" onSave={this.onSave.bind(this)}/>},
               {key: 'startDate',name: 'Start Date'},
               {key: 'completeDate',name: 'Expected Complete'} ];
          this.state = {
               _rows: rows,
               _columns: header
          }
     }
     onSave(id, value) {
        alert("Row : " + id + " Value : " + value);
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
