import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    operations: [],
    operation: {},
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
            state.operation = payload;
        },
        resetOperation: (state) => {
            console.log('resetOperaiton');
            state.operation = {};
        },
    },
});

export const operaitonReducer = OperationSlice.reducer;

export const { setOperations, setOperation, resetOperation } = OperationSlice.actions;