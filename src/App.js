import './App.css'
import MovieList from './components/MovieList'

const App = () => {
  const data = [
    {
      title: 'The Fellowship of the Ring',
      hours: 2,
      minutes: 58,
      poster:
        'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
      link: 'https://www.imdb.com/title/tt0120737/',
      color: "green"
    },
    {
      title: 'The Two Towers',
      hours: 2,
      minutes: 59,
      poster:
        'https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg',
      link: 'https://www.imdb.com/title/tt0167261/',
      color: "red"
    },
    {
      title: 'The Return of the King',
      hours: 3,
      minutes: 21,
      poster:
        'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      link: 'https://www.imdb.com/title/tt0167260/',
      color: "blue"
    },
    {
      title: 'An Unexpected Journey',
      hours: 2,
      minutes: 49,
      poster:
        'https://imgs.search.brave.com/VG2vezl6R6bMClkZ1IcwFIm4rrKEHi4_5yAzDMSn62g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aGV5dWd1eXMuY29t/L2ltYWdlcy8yMDEy/LzA5L1RoZS1Ib2Ji/aXQtQW4tVW5leHBl/Y3RlZC1Kb3VybmV5/LVBvc3Rlci5qcGc',
      link: 'https://www.imdb.com/title/tt0903624/',
      color: "brown"
    },
    {
      title: 'The Desolation of Smaug',
      hours: 2,
      minutes: 41,
      poster:
        'https://imgs.search.brave.com/k4Qk0yXmjN92v2K39ipVPb6B-WvWQZKhmq5GRMzDdDY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5tb3ZpZWFzc2V0/cy5jb20vc3RhdGlj/L2ltYWdlcy9pdGVt/cy9tb3ZpZXMvcG9z/dGVycy8wMGVjNmI0/NDg1ZjhlMDMwYzll/NjI2MDg0MjIzNTFk/MC5qcGc',
      link: 'https://www.imdb.com/title/tt1170358/',
      color: "teal"
    },
    {
      title: 'The Battle of the Five Armies',
      hours: 2,
      minutes: 24,
      poster:
        'https://imgs.search.brave.com/KDdqPCBVD8lA7ZKMGiJXwjbQXAck6SlKCHzGBFDCRYw/rs:fit:863:1200:1/g:ce/aHR0cHM6Ly9jZG43/LmJpZ2NvbW1lcmNl/LmNvbS9zLXlkcmlj/emsvaW1hZ2VzL3N0/ZW5jaWwvMTI4MHgx/MjgwL3Byb2R1Y3Rz/Lzg3MjAzLzg4MzAz/L3RoZV9ob2JiaXRf/VGhlX0JhdHRsZV9P/Zl9UaGVfRml2ZV9B/cm1pZXNfUG9zdGVy/X0ZpbmFsX3N0eWxl/X2J1eV9vcmlnaW5h/bF9tb3ZpZV9wb3N0/ZXJzX2F0X3N0YXJz/dGlsbHNfXzE3NTg3/LjE0MTQxNDc3NDQu/anBnP2M9Mj9pbWJ5/cGFzcz1vbg',
      link: 'https://www.imdb.com/title/tt2310332/',
      color: "purple"
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <MovieList data={data}/>
      </main>
    </div>
  )
}

export default App
