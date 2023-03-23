import watch from './watchSlice';
import download from './downloadSlice';
import {combineReducers} from 'redux';

export default combineReducers({ watch, download })