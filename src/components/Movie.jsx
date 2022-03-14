import React from 'react'

const Movie = (props) => {
  console.log(props)

  return (
    <div className='movie-card' id={props.movie.color}>
      <h3>{props.movie.title}</h3>
      <h5>Runtime: {props.movie.hours}:{props.movie.minutes}</h5>
      <a href={props.movie.link}>
        <img src={props.movie.poster} />
      </a>
    </div>
  )
}

export default Movie
