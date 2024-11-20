// pages/movie/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GlobalApi from '@/services/GlobalApi';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    [key: string]: any;
}

const MovieDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // Use the dynamic `id` parameter from the URL
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        if (id) {
            const fetchMovieDetail = async () => {
                try {
                    const response = await GlobalApi.getMovieDetail(id.toString()); // Fetch details using `id`
                    setMovie(response);
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                }
            };

            fetchMovieDetail();
        }
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
            />
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetail;
