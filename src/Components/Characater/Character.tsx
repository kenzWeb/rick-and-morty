import {useEffect, useState} from 'react'
import {useGetCharactersPaginationQuery} from '../../store/services/characaterApi'
import {setCharacter} from '../../store/slices/characterSlice'
import {useAppDispatch, useAppSelector} from '../../store/store'
import CharacaterCard from '../CharacaterCard/CharacaterCard'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.scss'

const Character = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const {characters, filter} = useAppSelector((state) => state.character)
	const dispatch = useAppDispatch()

	const {data, isFetching} = useGetCharactersPaginationQuery({
		page: filter.page,
		name: filter.name,
		status: filter.status,
	})
	console.log(data)

	useEffect(() => {
		if (data) {
			dispatch(setCharacter(data.results))
		}
	}, [data, dispatch])

	return (
		<>
			<section className={styles.wrapper}>
				<Filter />
				<Pagination
					setCurrentPage={setCurrentPage}
					pages={data?.info?.pages}
					currentPage={currentPage}
				/>
				{isFetching && <h1>Loading...</h1>}
				<div className={styles.cards}>
					{characters?.map((item) => (
						<CharacaterCard
							key={item.id}
							name={item.name}
							img={item.image}
							status={item.status}
							species={item.species}
						/>
					))}
				</div>
				<Pagination
					setCurrentPage={setCurrentPage}
					pages={data?.info?.pages}
					currentPage={currentPage}
				/>
			</section>
		</>
	)
}

export default Character
