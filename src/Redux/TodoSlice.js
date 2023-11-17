import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todo",
    initialState:{
        arr:[],
    },
   reducers:{
    addTodo(state,action){
        state.arr.push(action.payload);
    },
   },
});

export const {addTodo}=TodoSlice.actions;
export default TodoSlice.reducer