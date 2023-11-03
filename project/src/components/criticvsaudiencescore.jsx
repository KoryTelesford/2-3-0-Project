import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";

import movieData from "../data/movie-data.json";

function DomesticGross() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        } else {
            setMovies(movieData);
            localStorage.setItem('movies', JSON.stringify(movieData));
        }
    }, []);

    console.log(movies)

  return (
    <>
      <div className="App"> 
      <h2>Domestic Box Office</h2> 
          <div style={{ maxWidth: "700px" }}> 
            <Scatter 
              data={{ 
                labels: movies.map((data) => data.title), 
                datasets: [
                  {
                    label: "Audience Score",
                    data: movies.map((data) => ({
                      x: data.audienceScore,
                      y: data.domestic
                  })),
                    borderColor: '#824663',
                    backgroundColor: '#ae79bd',
                  },
                  {
                    label: "Critic Score",
                    data: movies.map((data) => ({
                      x: data.criticScore,
                      y: data.domestic
                  })),
                    borderColor: '#d7787b',
                    backgroundColor: '#bfe1f5',
                  },
                ],
              }} 
              height={400} 
              options={{ 
                maintainAspectRatio: true, 
                scales: { 
                  yAxes: [ 
                    { 
                      ticks: { 
                        beginAtZero: true, 
                      }, 
                    }, 
                  ], 
                }, 
                legend: { 
                  labels: { 
                    fontSize: 10, 
                  }, 
                }, 
              }} 
            /> 
          </div> 
    </div> 
    </>
  )
}

export default DomesticGross