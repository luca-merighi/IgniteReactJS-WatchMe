import {ReactNode} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'
import { useWatchMe } from '@/hooks/watchme'

interface SidebarListItemProps {
    id: number,
    url: string,
    urlText: string,
    icon: ReactNode,
    text: string,
}

export default function SidebarListItem(props: SidebarListItemProps) {
    const {changeSelectedGenre} = useWatchMe()
    const {asPath} = useRouter()
    
    return (
        <li className={styles.listItem}>
            <Link 
                href={props.url} 
                className={asPath == props.urlText ? styles.active : ''} 
                onClick={() => changeSelectedGenre(props.id, props.text, props.urlText)}>
                {props.icon}
                <span>
                    {props.text}
                </span>
            </Link>
        </li>
    )
}