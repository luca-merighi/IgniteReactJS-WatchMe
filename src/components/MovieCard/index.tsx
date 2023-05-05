import {FiStar, FiClock} from 'react-icons/fi'

import styles from './styles.module.scss'

interface MovieCardProps {
    img: string,
    title: string,
    rating: string,
    runtime: string
}

export default function MovieCard(props: MovieCardProps) {
    return (
        <div className={styles.movieCard}>
            <img src={props.img} alt={props.title} />

            <footer className={styles.movieInfo}>
                <h4>
                    {props.title}
                </h4>

                <div className={styles.infos}>
                    <span className={styles.rating}>
                        <FiStar color="#facc15" />
                        {props.rating}
                    </span>
                    <span className={styles.runTime}>
                        <FiClock color="#facc15" />
                        {props.runtime}
                    </span>
                </div>
            </footer>
        </div>
    )
}