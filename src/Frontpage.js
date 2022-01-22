import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

function Frontpage({ loading }) {
    if (loading) {
        return <p>Loading...</p>
    } else {
        return (
            <div className='frontpage'>
                <button className='mainpage'><Link className='browselinks' to='/onedayrentals'>Browse 1-Day Rentals</Link></button>
                <button className='mainpage'><Link className='browselinks' to='/twodayrentals'>Browse 2-Day Rentals</Link></button>
                <button className='mainpage'><Link className='browselinks' to='/threedayrentals'>Browse 3-Day Rentals</Link></button>
            </div>
        )
    }
}

export default Frontpage
