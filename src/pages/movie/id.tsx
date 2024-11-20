'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GlobalApi from '@/services/GlobalApi';

// Define types for movie details based on the API response structure
type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    [key: string]: any; // This allows for additional properties that might be returned by the API
};
const MovieDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Get the movie ID from the URL query

    const [movie, setMovie] = useState<Movie | null>(null); // Type the state as Movie or null
    const [loading, setLoading] = useState<boolean>(true); // Track loading state

    useEffect(() => {
        if (id) {
            const fetchMovieDetail = async () => {
                try {
                    console.log('Fetching movie details for ID:', id); // Log the id for debugging
                    const response = await GlobalApi.getMovieDetail(id); // Fetch movie details using the ID
                    console.log('Movie details response:', response); // Log the response for debugging
                    setMovie(response); // Assuming the response is structured as a movie object
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                    setLoading(false);
                }
            };
            fetchMovieDetail();
        }
    }, [id]); // Run the effect when the `id` changes

    if (loading) {
        return <div>Loading...</div>; // Show loading while the data is being fetched
    }

    if (!movie) {
        return <div>No movie found or an error occurred.</div>; // If movie is not found
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
            />
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetail;
