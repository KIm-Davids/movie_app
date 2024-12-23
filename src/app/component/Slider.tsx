// components/MovieSlider.tsx
'use client';
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for routing

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

const MovieSlider: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const response = await GlobalApi.getTrendingVideos();
                setMovies(response.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
                setLoading(false);
            }
        };

        getTrendingMovies();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="relative w-full mt-40">
            <div className="absolute top-0 left-0 w-full text-center text-4xl font-bold text-white bg-black bg-opacity-50 py-4">
                POPULAR MOVIES
            </div>

            <div className="slider-container flex gap-4 px-4 py-8 overflow-x-scroll scroll-smooth scrollbar-hide pt-40">
                {movies.map((movie) => (
                    <Link key={movie.id} href={`/movie/${movie.id}`}>
                        <div className="slider-item relative w-96 h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={`Backdrop for movie: ${movie.title}`}
                                width={900}
                                height={500}
                                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg font-bold">{movie.title}</h3>
                                <p className="text-sm">{movie.release_date}</p>
                                <div className="flex items-center gap-1 text-sm">
                                    <span>⭐ {movie.vote_average}</span>
                                </div>
                                <p className="text-xs mt-2">{movie.overview}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieSlider;
