import { useState, useEffect  } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import movieData from './data/movie-data.json/'
import genreandtotalgross from './components/genresandtotalgross/'

function App() {
  const [movies, setMovies] = useState([]);

  // Load movies from localStorage or default data on component mount
  useEffect(() => {
      const storedMovies = localStorage.getItem('movies');
      if (storedMovies) {
          setMovies(JSON.parse(storedMovies));
      } else {
          setMovies(movieData);
          localStorage.setItem('movies', JSON.stringify(movieData));
      }
  }, []);

  const handleSubmit = (event) => {
      // event.preventDefault();

      const newMovie = {
          title: event.target.title.value,
          criticScore: event.target.criticScore.value,
          audienceScore: event.target.audienceScore.value,
          domestic: parseInt(event.target.domestic.value),
          genre: event.target.movies.value,
      };

      const updatedMovies = [...movies, newMovie];
      setMovies(updatedMovies);
      localStorage.setItem('movies', JSON.stringify(updatedMovies));

      event.target.reset();
      
  };

  const handleReset = () => {
      setMovies(movieData);
      localStorage.setItem('movies', JSON.stringify(movieData));
      window.location.reload()
  };

  return (
    <>
      <div className="App"> 
      <h1>2023's Top Domestic Movies</h1> 
          <h5>Movies</h5> 
          <form onSubmit={handleSubmit}>
              <label for="title">Movie Title:</label><br/>
              <input type="text" id="title" name="title" required/><br/>
              <label for="criticScore">Critic Score:</label><br/>
              <input type="number" id="criticScore" name="criticScore" required/><br/>
              <label for="audienceScore">Audience Score:</label><br/>
              <input type="number" id="audienceScore" name="audienceScore" required/><br/>
              <label for="domestic">Domestic Gross Sales:</label><br/>
              <input type="number" id="domestic" name="domestic" required/><br/>
              <label for="genre">Genre:</label><br/>
              <select name="movies" required>
                  <option value="">Select a genre</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="horror">Horror</option>
                  <option value="concert">Concert</option>
                  <option value="documentary">Documentary</option>
                  <option value="musical">Musical</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Sci-Fi</option>
                  <option value="thriller">Thriller</option>
              </select>
              <br/><br/>
              <input type="submit" value="Submit"/>
          </form>

          {/* Render your movies here */}
          <div className="Results">
            {movies.map((movie, index) => (
                <div key={index}>
                    <h2>{movie.title}</h2>
                    <p>Critic Score: {movie.criticScore}</p>
                    <p>Audience Score: {movie.audienceScore}</p>
                    <p>Domestic Gross Sales: {movie.domestic}</p>
                    <p>Genre: {movie.genre}</p>
                </div>
            ))}
          </div>

          {/* Add a button to reset movies to default data */}
          <button onClick={handleReset}>Return to Default</button>

      {/* <div style={{ maxWidth: "650px" }}> 
        <Bar 
          data={{ 
            // Name of the variables on x-axies for each bar 
            labels: sourceData.map((data) => data.label), 
            datasets: [
              //You could add two labels and get the data from the sourceDAta file using a map to get all the data for that specefic value.
              {
                label: "Counter",
                data: sourceData.map((data) => data.value),
                borderColor: '#36A2EB',
                backgroundColor: '#FFB1C1',
              },
            ],
          }} 
          // Height of graph 
          height={400} 
          options={{ 
            maintainAspectRatio: false, 
            scales: { 
              yAxes: [ 
                { 
                  ticks: { 
                    // The y-axis value will start from zero 
                    beginAtZero: true, 
                  }, 
                }, 
              ], 
            }, 
            legend: { 
              labels: { 
                fontSize: 15, 
              }, 
            }, 
          }} 
        /> 
      </div>  */}
    </div> 
    </>
  )
}

export default App
