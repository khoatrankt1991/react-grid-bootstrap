var redux = require('redux');

var username = (state = null, action) => {
    switch (action.type) {
        case "LOG_IN": return action.username;
        case "LOG_OUT": return null;
        default:
            return state;
    }
};
var listproduct = (state = [], action)=>{
    switch(action.type) {
        case "LIST_PRODUCT" : return action.listproduct
        case "REMOVE_ITEM"  : return state.filter((e,i)=>e.id != action.id)
        case "UPDATE_FIELD_COMPLETE" : {
            //return [...state].map((e,i)=>e.id==action.id?e.complete=action.value:f=>f)
            var stateclone = [...state];
            stateclone[action.id].complete = action.value;
            return stateclone;
        }
        default: return state;
    }
};
var reducer = redux.combineReducers({username, listproduct});
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension():f=>f
));

store.subscribe(()=>{console.log(store.getState())});
module.exports = store;

