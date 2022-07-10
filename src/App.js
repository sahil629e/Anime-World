import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import "./App.css"
// import Card from './Components/Card';

const App = () => {

  const [anime, setanime] = useState([]);

  const fetchData = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        return response.json();
      }).then((data) => {
        setanime(data)
        console.log(data);
      })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="row ">
          {anime.map(data => (

            <div className=" card-container mx-auto my-3" key={data.id}>
              <div className="card card-front">
                <img className="card-img-top shadow bg-body rounded" src={data.image} alt="..." />
                <div className="shadow bg-body rounded">
                  <h5 className="card-title p-3 ">{data.title}</h5>
                  <p className="card-text p-1">{data.description.slice(0, 300)}</p>
                </div>
              </div>
              <div className="card card-back">
                <div className="card-body shadow bg-body rounded">
                  <img className="card-img-top " src={data.movie_banner} alt="..." style={{ height: "329px", width: "246px" }} />
                  <h5 className="card-title mt-1">{data.title}</h5>
                  <p className="card-text">Director : {data.director}</p>
                  <p className="card-text">Producer : {data.producer}</p>
                  <p className="card-text">Release Date : {data.release_date}</p>
                  <p className="card-text">Run Time : {data.running_time}</p>
                  <p className="card-text">Ratings : {data.rt_score}/100</p>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </>

  )
}

export default App
