import React from "react";
import {useEffect, useState} from 'react'


function MovieCard(props) {
  

  return (
    <>
    {/* <div className="cardContainer" style={{ backgroundImage: `url(${props.image})`, backgroundSize: `cover` }}>
      {props.title}
      </div> */}
    <div className="filmContainer" onClick={(e)=> props.setCurrentMovie("none")}>
      <div className="filmInfo">
          <h1>{props.title}</h1>
          <div class="infoWrap">
          <p><span>Director:</span> {props.director}</p>
          <p><span>Producer:</span> {props.producer}</p>
          <p><span>Release Year:</span> {props.release_date}</p>
          <p><span>Movie length:</span> {props.running_time} mins</p>
          <p>{props.description}</p>
          </div>
        </div>
        <img class="filmImage" src={props.image}/>
    </div>
    </>
  );


}

export default MovieCard