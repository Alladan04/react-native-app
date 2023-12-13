import {configureStore} from '@reduxjs/toolkit';
import { operaitonReducer } from './OperationListSlice';

export const  store = configureStore({reducer:{operation: operaitonReducer}})