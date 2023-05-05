import { useWatchMe } from '@/hooks/watchme'
import styles from './styles.module.scss'

export default function Header() {
    const {selectedGenre} = useWatchMe()

    return (
        <header className={styles.header}>
            <h3>
                Categoria: <span>{selectedGenre}</span>
            </h3>
        </header>
    )
}