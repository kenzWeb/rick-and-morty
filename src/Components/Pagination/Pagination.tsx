import {setFilter} from '../../store/slices/characterSlice'
import {useAppDispatch} from '../../store/store'
import styles from './styles.module.scss'

type Props = {
	pages: number | undefined
	setCurrentPage: (page: number) => void
	currentPage: number
}

const Pagination = ({pages}: Props) => {
	const dispatch = useAppDispatch()
	const pageNumbers = []

	if (pages !== undefined) {
		for (let i = 1; i <= pages; i++) {
			pageNumbers.push(i)
		}
	}

	return (
		<div className={styles.wrapper}>
			{pageNumbers.map((number) => (
				<button
					key={number}
					onClick={() => dispatch(setFilter({key: 'page', value: number}))}
				>
					{number}
				</button>
			))}
		</div>
	)
}

export default Pagination
