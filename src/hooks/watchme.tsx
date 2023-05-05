import {ReactNode, createContext, useContext, useEffect, useState} from 'react'
import { api } from '@/services/api'

interface Genre {
    id: number,
    name: string,
    title: string,
    url: string
}

interface MovieProps {
    Genre_id: number,
    Poster: string,
    Title: string,
    Ratings: Array<[Value: string]>,
    Runtime: string
}

interface WatchMeContextData {
    genres: Genre[],
    selectedGenre: string,
    movies: MovieProps[],
    moviesGenres: string,
    changeSelectedGenre: (id: number, genre: string, movieGenre: string) => void
}

interface WatchMeProviderProps {
    children: ReactNode
}

const WatchMeContext = createContext<WatchMeContextData>(
    {} as WatchMeContextData
)

export default function WatchMeProvider(props: WatchMeProviderProps) {
    const [genres, setGenres] = useState<Genre[]>([])
    const [selectedGenre, setSelectedGenre] = useState('Ação')
    const [movies, setMovies] = useState<MovieProps[]>([])
    const [moviesGenres, setMoviesGenres] = useState('acao')

    function changeSelectedGenre(id: number, genre: string, movieGenre: string) {
        setSelectedGenre(genre)
        setMoviesGenres(movieGenre)

        getFilteredMovies(id)
    }
    
    async function getFilteredMovies(id: number) {
        const filteredMovies = await api.get(`/movies/?Genre_id=${id}`) 
        setMovies(filteredMovies.data)
    }   

    useEffect(() => {
        async function getGenresList() {
            const genresList = await api.get('/genres/')
            setGenres(genresList.data)
        }
        getGenresList()
    }, [])

    useEffect(() => {
        async function getMoviesList() {
            const moviesList = await api.get('/movies/?Genre_id=1')
            setMovies(moviesList.data)
        } 
        getMoviesList()
    }, [])

    return (
        <WatchMeContext.Provider value={{
            genres,
            selectedGenre,
            movies,
            moviesGenres,
            changeSelectedGenre
        }}>
            {props.children}
        </WatchMeContext.Provider>
    )
}

export function useWatchMe() {
    const context = useContext(WatchMeContext)
    return context
}