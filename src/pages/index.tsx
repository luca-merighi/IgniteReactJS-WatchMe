import React from 'react'
import Head from 'next/head'
import { useWatchMe } from '@/hooks/watchme'

import styles from './home.module.scss'

import MovieCard from '@/components/MovieCard'

export default function Home() {
    const {movies} = useWatchMe()

    return (
        <React.Fragment>
            <Head>
                <title>WatchMe</title>
            </Head>
  
            <section className={styles.content}>
                {movies.map(movie => (
                    <MovieCard 
                        img={movie.Poster}
                        title={movie.Title}
                        runtime={movie.Runtime}
                        rating={movie.Ratings[0].Value} />
                ))}
            </section>
      </React.Fragment>
    )
}