import React from 'react'
import { Link } from 'react-router-dom';
import rented from './rented.png';

function Movie({ poster_path, picture, id, rent }) {
    return (
        <div className='movie'>
            <img 
                className='main'
                alt='' 
                src={`https://image.tmdb.org/t/p/original/${poster_path}`} 
                style={{ width: '200px', height: 'auto' }}
            />
            <img className='sticker' src={picture} alt='' />
            {rent && <img className='rented' src={rented} alt='' />}
            <div className="overlay">
                {rent? 
                    <Link className='movielink' to={`/${id}`}>Find Similar</Link> : 
                    <Link className='movielink' to='/'>Add to Cart</Link>}
            </div>
        </div>
    )
}

export default Movie;


