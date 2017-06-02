import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {DatePicker, PercentComplete, Button} from 'CellFormatter';
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
                formatter: <PercentComplete editable="true" onSave={this.onSaveComplete.bind(this)}/>},
               {key: 'startDate',name: 'Start Date', formatter: <DatePicker onSave={this.onSaveStartDate.bind(this)}/>},
               {key: 'completeDate',name: 'Expected Complete'},
               {key: '',name: 'Action', formatter: <Button css="btn btn-danger" onClickMe={this.onRemove.bind(this)}>X</Button>}];
           this.state = {columns: header};
     }
     componentDidMount() {
       axios.get("/listProduct").then(res=>{
         var {dispatch} = this.props;
         dispatch({type: "LIST_PRODUCT", listproduct: res.data});
       }).catch(e=>console.log(e))
     }
     onSaveStartDate(id, value) {
        var {dispatch} = this.props;
        dispatch({type: "UPDATE_ITEM", id: id, item: {...this.props.listProduct[id], startDate: value}});
     }
     onSaveComplete(id, value) {
        var {dispatch} = this.props
        dispatch({type: "UPDATE_ITEM", id: id, item: {...this.props.listProduct[id], complete: value}});
     }
     onRemove(idx, value) {
        console.log(idx);
         var {dispatch} = this.props;
         dispatch({type: "REMOVE_ITEM", id: idx});
     }
     rowGetter(i) {
       return this.props.listProduct[i]
     }
     render() {
       return this.props.listProduct == undefined?<div>Loading...</div>:
       <ReactDataGrid 
                  columns={this.state.columns}
                  rowGetter={this.rowGetter.bind(this)}
                  rowsCount={this.props.listProduct.length}
                  minHeight={500} />
     }
}
module.exports = connect(function(state){
  return {listProduct: state.listproduct}
})(Example02);
