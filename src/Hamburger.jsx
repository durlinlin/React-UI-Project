import React, { useState, useEffect } from "react";
import axios from "axios";

function Hamburger(props) {
  const [menuInfo, setMenuInfo] = useState([]);
  const [isActive, setActive] = useState("false");

  let fetchData = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json())
    .then((data) => {
      setMenuInfo(data)
    })
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const handleToggle = () => {
    setActive(!isActive);
  };
  const closeMenu = () => {
    setActive(true)
  }
  const handleMenuClick = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.name)
    props.pickmovie(e.target.dataset.name)
    closeMenu()
  }
  
  return (
    <>
      <ul class={isActive ? "menu" : "showMenu"}>
        {menuInfo.map((data) => (
          <li>
            <a data-name={data.title} onClick={handleMenuClick} className="menuItem">{data.title}</a>
          </li>
        ))}
      </ul>
      <button class="hamburger" onClick={handleToggle}>
        </button>
    </> 
  )
}

export default Hamburger