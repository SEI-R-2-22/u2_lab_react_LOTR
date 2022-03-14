import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  console.log(props)

  return (
    <div>
      <Movie movie={props.data[0]} />
      <Movie movie={props.data[1]} />
      <Movie movie={props.data[2]} />
      <Movie movie={props.data[3]} />
      <Movie movie={props.data[4]} />
      <Movie movie={props.data[5]} />
    </div>
  )
}

export default MovieList
