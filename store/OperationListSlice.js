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
            state.devices = payload;
        },
        setOperation: (state, { payload }) => {
            console.log('setOperation');
           // console.log(payload) ;
            state.device = payload;
        },
        resetOperation: (state) => {
            console.log('resetOperaiton');
            state.device = {};
        },
    },
});

export const operaitonReducer = OperationSlice.reducer;

export const { setOperations, setOperation, resetOperation } = OperationSlice.actions;