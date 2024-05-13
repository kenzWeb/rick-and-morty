import {characaterApi} from './services/characaterApi'
import {combineReducers} from '@reduxjs/toolkit'
import characterSlice from './slices/characterSlice'

export const rootReducer = combineReducers({
	character: characterSlice,
	[characaterApi.reducerPath]: characaterApi.reducer,
})
