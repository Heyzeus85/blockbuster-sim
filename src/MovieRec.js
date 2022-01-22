import React from 'react'

function MovieRec({ poster_path }) {
    return (
        <div className='movie'>
            <img 
                className='main'
                alt='' 
                src={`https://image.tmdb.org/t/p/original/${poster_path}`} 
                style={{ width: '200px', height: 'auto' }}
            />
        </div>
    )
}

export default MovieRec