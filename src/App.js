import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import Frontpage from './Frontpage';
import MovieItem from './MovieItem';
import Header from './Header';
import onedayrental from './onedayrental.png';
import twodayrental from './twodayrental.png';
import threedayrental from './threedayrental.png';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onedayrentals: [],
      twodayrentals: [],
      threedayrentals: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  // Retrieves three pages of trending movies from the MovieDB API
  getMovies = () => {
    this.setState({ loading: true })

    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=94d4ad026c5009bdaf4aecb8989dfa07&language=en-US')
    .then(res => this.setState({ onedayrentals: res.data.results }))

    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=94d4ad026c5009bdaf4aecb8989dfa07&language=en-US&page=2')
    .then(res => this.setState({ twodayrentals: res.data.results }))

    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=94d4ad026c5009bdaf4aecb8989dfa07&language=en-US&page=3')
    .then(res => this.setState({ threedayrentals: res.data.results }))

    this.setState({ loading: false })
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element=
              {<Frontpage 
                loading={this.state.loading} 
              />} 
          />
          <Route 
            path='onedayrentals' 
            element={<Movies movies={this.state.onedayrentals} loading={this.state.loading} imgsrc={onedayrental} />} 
          />
          <Route 
            path='twodayrentals' 
            element={<Movies movies={this.state.twodayrentals} loading={this.state.loading} imgsrc={twodayrental} />}
          />
          <Route 
            path='threedayrentals' 
            element={<Movies movies={this.state.threedayrentals} loading={this.state.loading} imgsrc={threedayrental} />}
          />
          <Route path=':id' element={<MovieItem loading={this.state.loading} />} />
        </Routes>
        <footer id='footer'>Made with nostalgia by JD Walters</footer>
      </BrowserRouter>
    );
  }
}

export default App;

// API key: 94d4ad026c5009bdaf4aecb8989dfa07
