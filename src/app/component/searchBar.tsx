'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash'; // For debouncing API calls
import GlobalApi from '@/services/GlobalApi';

type Movie = {
    id: number;
    title: string;
    poster_path: string;
};

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // Debounced search function to prevent too many API requests
    const debouncedSearch = debounce(async (query: string) => {
        if (query) {
            setLoading(true);
            const movies = await GlobalApi.searchMovies(query);
            setSuggestions(movies);
            setLoading(false);
        } else {
            setSuggestions([]);
        }
    }, 500); // Debounce delay of 500ms

    // Update query and trigger debounced search
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        debouncedSearch(e.target.value);
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search movies..."
                className="w-full px-4 py-2 border border-blue-400 bg-white-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-10"
            />
            {loading && query && (
                <div className="absolute left-0 right-0 mt-1 text-center text-gray-500">
                    Loading...
                </div>
            )}
            {suggestions.length > 0 && !loading && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-sky-500 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {suggestions.map((movie) => (
                        <li
                            key={movie.id}
                            className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                            onClick={() => setQuery(movie.title)} // Set query to selected movie title
                        >
                            {movie.poster_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w40${movie.poster_path}`}
                                    alt={movie.title}
                                    className="mr-2"
                                />
                            )}
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
