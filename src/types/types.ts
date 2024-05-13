export interface Character {
	results: Character[]
	id: number
	name: string
	status: string
	image: string
	species: string
}

export interface Info {
	count: number
	pages: number
	next: string
	prev: string
}

export interface Pagination {
	results: Character[]
	info: Info
}

export interface CharacterApi {
	page: number
	name: string
	status: string
}