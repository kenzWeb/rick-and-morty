import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

import {Character} from '../../types/types'

interface State {
	characters: Character[]
	filter: {
		name: string
		status: string
		page: number
	}
}

const initialState: State = {
	characters: [],
	filter: {
		name: '',
		status: '',
		page: 1,
	},
}

export const characterSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		setCharacter: (state, action) => {
			state.characters = action.payload
		},
		setFilter: (
			state,
			action: PayloadAction<{key: string; value: string | null | number}>,
		) => {
			const {key, value} = action.payload
			state.filter = {...state.filter, [key]: value}
		},
	},
})

export const {setCharacter, setFilter} = characterSlice.actions

export default characterSlice.reducer
