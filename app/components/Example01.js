import React from 'react';
import ReactDataGrid from 'react-data-grid';

class Example01 extends React.Component {
     constructor(props) {
          super(props);
          let rows = [];
              for (let i = 1; i < 100; i++) {
                rows.push({
                  id: i,
                  title: 'Title ' + i,
                  count: i * 1000
                });
          this.state = {
               _columns : [
                               { key: 'id', name: 'ID' },
                               { key: 'title', name: 'Title' },
                               { key: 'count', name: 'Count' } ],
               _rows: rows,

          }
     }


     render() {
          return <h1>asdfadf</h1>
          return  (
                <ReactDataGrid
                  columns={this.state._columns}
                  rowGetter={this.rowGetter.bind(this)}
                  rowsCount={this.state._rows.length}
                  minHeight={500} />);
     }
}
module.exports = Example01;
