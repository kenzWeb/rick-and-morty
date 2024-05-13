import styles from './styles.module.scss'

type Props = {
	name: string
	img: string
	status: string
	species: string
}

const CharacaterCard = ({name, img, status, species}: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<img className={styles.img} src={img} alt={name} />
			</div>
			<div className={styles.right}>
				<h2 className={styles.title}>{name}</h2>
				<h2 className={styles.status}>{status} - {species}</h2>
			</div>
		</div>
	)
}

export default CharacaterCard
