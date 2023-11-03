import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

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

  
  return (
    <>
      <div className="App"> 
      <h2>Genres and total gross</h2> 
      <div style={{ maxWidth: "650px" }}> 
        <Doughnut 
          data={{ 
            // Name of the variables on x-axies for each bar 
            labels: movies.slice(0, 6).map((data) => data.genre), 
            datasets: [
              //You could add two labels and get the data from the sourceDAta file using a map to get all the data for that specefic value.
              {
                label: "Domestic Gross",
                data: movies.sort((a, b) => b.domestic - a.domestic).slice(0, 6).map((data) => data.domestic),
                borderColor: '#36A2EB',
                backgroundColor: '#FFB1C1',
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