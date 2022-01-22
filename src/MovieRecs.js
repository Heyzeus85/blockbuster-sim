import React from 'react';
import MovieRec from './MovieRec';

const MovieRecs = ({ movies, loading }) => {
    if (loading) {
        return <p>Loading...</p>
    } else {
        return (
            <div className='movies'>
                {movies.map(movie => (
                    <MovieRec
                        key={movie.id}
                        poster_path={movie.poster_path}
                    />
                ))}
            </div>
        )
    }
}

export default MovieRecs
