import {MouseEventHandler, useState} from 'react'
import {setFilter} from '../../store/slices/characterSlice'
import {useAppDispatch} from '../../store/store'
import styles from './styles.module.scss'

const Filter = () => {
	const dispatch = useAppDispatch()
	const [nameFilter, setNameFilter] = useState('')
	const [statusFilter, setStatusFilter] = useState('')

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameFilter(event.target.value)
	}

	const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStatusFilter(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		dispatch(setFilter({key: 'name', value: nameFilter}))
		dispatch(setFilter({key: 'status', value: statusFilter}))
		setNameFilter('')
		setStatusFilter('')
	}

	const handleReset: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		dispatch(setFilter({key: 'name', value: ''}))
		dispatch(setFilter({key: 'status', value: ''}))
		setNameFilter('')
		setStatusFilter('')
		dispatch(setFilter({key: 'page', value: 1}))
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type='text'
					value={nameFilter}
					onChange={handleNameChange}
					placeholder='Фильтр по имени'
					className={styles.input}
				/>
				<input
					type='text'
					value={statusFilter}
					onChange={handleStatusChange}
					placeholder='Фильтр по статусу'
					className={styles.input}
				/>
				<button className={styles.button} type='submit'>
					Применить
				</button>
				<button
					className={styles.button}
					type='reset'
					onClick={handleReset}
					title='Сброс'
				>
					Сбросить
				</button>
			</form>
		</div>
	)
}

export default Filter
