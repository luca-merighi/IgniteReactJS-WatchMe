import {FaRunning, FaLaughSquint, FaFilm, FaTheaterMasks, FaUsers} from 'react-icons/fa'
import {RiKnifeFill} from 'react-icons/ri'
import { useWatchMe } from '@/hooks/watchme'

import SidebarListItem from '../SidebarListItem'

import styles from './styles.module.scss'


export default function Sidebar() {
    const {genres} = useWatchMe()

    const iconsList = [
        {
            name: "acao",
            icon: <FaRunning />
        },
        {
            name: "comedia",
            icon: <FaLaughSquint />
        },
        {
            name: "documentario",
            icon: <FaFilm />
        },
        {
            name: "drama",
            icon: <FaTheaterMasks />
        },
        {
            name: "terror",
            icon: <RiKnifeFill />
        },
        {
            name: "familia",
            icon: <FaUsers />
        },
    ]

    return (
        <section className={styles.sidebar}>
            <header className={styles.sidebarHeader}>
                <h1>Watch<span>Me</span></h1>
            </header>

            <ul className={styles.genreLinks}>
                {genres.map(genre => {
                    return (
                        <SidebarListItem 
                            key={genre.id}
                            id={genre.id}
                            url="/"
                            urlText={`/${genre.url}`}
                            icon={iconsList.map(icon => {
                                if(icon.name == genre.url) {
                                    return (icon.icon)
                                }
                            })}
                            text={genre.title} />
                    )
                })}
            </ul>
        </section>
    )
}