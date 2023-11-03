import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// import movieData from "../data/movie-data.json";

function DomesticGross() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }
    }, []);

  return (
    <>
      <div className="App"> 
      <h2>Domestic Box Office</h2> 
      <div style={{ maxWidth: "700px" }}> 
        <Bar 
          data={{ 
            // Name of the variables on x-axies for each bar 
            labels: movies.map((data) => data.title), 
            datasets: [
              //You could add two labels and get the data from the sourceDAta file using a map to get all the data for that specefic value.
              {
                label: "Domestic Gross",
                data: movies.sort((a, b) => b.domestic - a.domestic).map((data) => data.domestic),
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
