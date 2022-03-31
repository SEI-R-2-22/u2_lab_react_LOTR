import Movie from './Movie'

const MovieList = (props) => {

  return (
    <div className="movie-list">
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
