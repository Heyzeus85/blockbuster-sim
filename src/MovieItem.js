import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import MovieRecs from './MovieRecs';

function MovieItem({ loading }) {
    let params = useParams();

    const [movierecs, setMovierecs] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=94d4ad026c5009bdaf4aecb8989dfa07`)
        .then(res => setMovierecs(res.data.results))
    }, [params.id])

    return (
        <div>
            <MovieRecs movies={movierecs} loading={loading} />
        </div>
    )
}

export default MovieItem
