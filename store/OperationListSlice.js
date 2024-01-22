import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    operations: [],
    operation: {},
    text:"",
};

export const OperationSlice = createSlice({
    name: 'operation',
    initialState,
    reducers: {
        setOperations: (state, { payload }) => {
            console.log('setOperations');
           // console.log(payload) ;
            state.operations = payload;
        },
        setOperation: (state, { payload }) => {
            console.log('setOperation');
           // console.log(payload) ;
           console.log(payload);
            state.operation = payload;
        },
        resetOperation: (state) => {
            console.log('resetOperaiton');
            state.operation = {};
        },
        setText:(state, {payload})=>{
            console.log("changing search text to", payload);
            state.text = payload;
        },
    },
});

export const operaitonReducer = OperationSlice.reducer;

export const { setOperations, setOperation, resetOperation, setText } = OperationSlice.actions;