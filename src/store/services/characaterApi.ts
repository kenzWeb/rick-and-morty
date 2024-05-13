import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Character, CharacterApi, Pagination} from '../../types/types'

const BASE_URL = 'https://rickandmortyapi.com/api/'

export const characaterApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
	endpoints: (builder) => ({
		getCharacters: builder.query<Character, void>({
			keepUnusedDataFor: 0,
			query: () => {
				return {
					url: 'character',
				}
			},
		}),
		getCharactersPagination: builder.query<Pagination, CharacterApi>({
			keepUnusedDataFor: 0,
			query: ({page, name, status}) => {
				return {
					url: `character/?page=${page}&name=${name}&status=${status}`,
				}
			},
		}),
	}),
})

export const {useGetCharactersQuery, useGetCharactersPaginationQuery} =
	characaterApi
