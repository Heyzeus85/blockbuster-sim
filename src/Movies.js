import React from 'react';
import Movie from './Movie';

const Movies = ({ movies, loading, imgsrc }) => {
    if (loading) {
        return <p>Loading...</p>
    } else {
        return (
            <div className='movies'>
                {movies.map(movie => (
                    <Movie 
                        key={movie.id}
                        title={movie.original_title} 
                        poster_path={movie.poster_path}
                        picture={imgsrc}
                        id={movie.id}
                        rent={Math.random() < 0.5}
                    />
                ))}
            </div>
        )
    }
}

export default Movies
