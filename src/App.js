// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx'
import React from 'react';
import MovieCard from './movieCard'
import { useEffect, useState } from 'react'
import Hamburger from './Hamburger';

function App() {
const [movies, setMovies] = useState([])
const [currentMovie, setCurrentMovie] = useState("")
  let fetchData = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
      })
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="bigContainer">
      {/* {movies.map((data) => data.title.includes(currentMovie) &&
        (<Navbar id={data.id} title={data.title}>
        </Navbar>))} */}
      <Hamburger pickmovie={setCurrentMovie} />
      <Navbar />
      <div className='contentContainer'>
      {movies.map((data) => data.title.includes(currentMovie) &&
        (<MovieCard
          title={data.title}
          image={data.image}
          director={data.director}
          producer={data.producer}
          release_date={data.release_date}
          running_time={data.running_time}
          description={data.description}>
        </MovieCard>))}
      </div>
    </div>
  );
}

export default App;
