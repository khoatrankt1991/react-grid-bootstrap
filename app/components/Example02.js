import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {PercentComplete} from 'CellFormatter';
import {connect} from 'react-redux';
import axios from 'axios';
class Example02 extends React.Component {
     constructor(props) {
          super(props);
          var header = [
               {key: 'id',name: 'ID',width: 80},
               {key: 'task',name: 'Title'},
               {key: 'priority',name: 'Priority'},
               {key: 'issueType',name: 'Issue Type'},
               {key: 'complete',name: '% Complete',
                formatter: <PercentComplete editable="true" onSave={this.onSave.bind(this)}/>},
               {key: 'startDate',name: 'Start Date'},
               {key: 'completeDate',name: 'Expected Complete'}];
           this.state = {columns: header};
     }
     componentDidMount() {
       axios.get("/listProduct").then(res=>{
         var {dispatch} = this.props;
         dispatch({type: "LIST_PRODUCT", listproduct: res.data});
       }).catch(e=>console.log(e))
     }
     onSave(id, value) {
        var {dispatch} = this.props;
        //dispatch({type: "UPDATE_FIELD_COMPLETE", id: id, value: value});
        dispatch({type: "UPDATE_FIELD_COMPLETE", id: id, value: value});
     }
     rowGetter(i) {
       return this.props.listProduct[i]
     }
     render() {
       if(this.props.listProduct == undefined || this.props.listProduct.length == 0) return <div>Loading...</div>
       return (
                <ReactDataGrid 
                  columns={this.state.columns}
                  rowGetter={this.rowGetter.bind(this)}
                  rowsCount={this.props.listProduct.length}
                  minHeight={500} />);
     }
}
module.exports = connect(function(state){
  return {listProduct: state.listproduct}
})(Example02);
