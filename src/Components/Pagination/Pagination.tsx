import {setFilter} from '../../store/slices/characterSlice'
import {useAppDispatch} from '../../store/store'
import styles from './styles.module.scss'

type Props = {
	pages: number | undefined
	currentPage: number
	setCurrentPage: (page: number) => void
}

const Pagination = ({pages, currentPage, setCurrentPage}: Props) => {
	const dispatch = useAppDispatch()
	const pageNumbers: (number | '...')[] = []

	if (pages !== undefined) {
		const startPage = Math.max(currentPage - 2, 1)
		const endPage = Math.min(currentPage + 2, pages)

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i)
		}

		if (startPage > 1) {
			pageNumbers.unshift(1)
			if (startPage > 2) {
				pageNumbers.splice(1, 0, '...')
			}
		}

		if (endPage < pages) {
			if (endPage < pages - 1) {
				pageNumbers.push('...')
			}
			pageNumbers.push(pages)
		}
	}

	return (
		<div className={styles.wrapper}>
			{pageNumbers.map((number, index) => (
				<button
					key={index}
					onClick={() => {
						if (number !== '...') {
							dispatch(setFilter({key: 'page', value: number}))
							setCurrentPage(number)
						}
					}}
					className={styles.button}
					disabled={number === '...'}
				>
					{number}
				</button>
			))}
		</div>
	)
}

export default Pagination
