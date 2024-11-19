import {useEffect, useState} from 'react';
import GlobalApi from '@/services/GlobalApi'


interface Movie {
    id: number;
    title: string;
    poster_path:string;
}

const MovieHeader  = () => {
    const[movies, setMovies] =useState<Movie[]>([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const popularMovies = await GlobalApi.getTrendingVideos();
            setMovies(popularMovies);
        };
        fetchMovies();
    }, []);
    return (
        <div className="movie-header-wrapper">

        </div>
    );
};
