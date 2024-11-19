'use client';

import React, { useEffect, useState } from 'react';
import GlobalApi from '@/services/GlobalApi';
import Image from 'next/image';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

const Slider: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]); // State to store trending movies
    const [loading, setLoading] = useState<boolean>(true); // Loading state for the API request
    const [sliderVisible, setSliderVisible] = useState<boolean>(false); // State to control slider visibility

    useEffect(() => {
        // Fetch trending movies when the component mounts
        const getTrendingMovies = async () => {
            try {
                const response = await GlobalApi.getTrendingVideos();
                setMovies(response.results); // Assuming the API returns the movies in `results`
                setLoading(false); // Set loading to false once data is fetched
                setSliderVisible(true); // Show the slider once data is loaded
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
                {/* Spinning blue wheel */}
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="relative w-full mt-40">
            {/* Hide the slider until movies are loaded */}
            <div
                className={`slider-container flex gap-4 px-4 py-8 overflow-x-scroll scroll-smooth scrollbar-hide ${sliderVisible ? '' : 'hidden'}`}
            >
                {movies.map((movie) => (
                    <div
                        key={movie?.id}
                        className="slider-item relative w-96 h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg group"
                    >
                        {/* Movie Image */}
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} // Using backdrop_path for a larger image
                            alt={`Backdrop for movie: ${movie?.title}`}
                            width={900}
                            height={500}
                            className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                        />
                        {/* Movie Information (Visible on hover) */}
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-bold">{movie?.title}</h3>
                            <p className="text-sm">{movie?.release_date}</p>
                            <div className="flex items-center gap-1 text-sm">
                                <span>⭐ {movie?.vote_average}</span>
                            </div>
                            <p className="text-xs mt-2">{movie?.overview}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Optional: Add navigation buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg cursor-pointer z-10">
                &lt;
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg cursor-pointer z-10">
                &gt;
            </div>
        </div>
    );
};

export default Slider;
