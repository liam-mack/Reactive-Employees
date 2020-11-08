import React from "react";
import "./Searchbar.scss"


export default function Navbar({ searched, sortingName, startSorting }) {
  return (
    <header>
      <h1>Welcome to Dunder Mifflin Paper!</h1>
      <h3>Search Employee Directory: </h3>
      <input type="textbox" value={searched} onChange={sortingName}></input>
      <button onClick={startSorting}>By Name</button>
    </header>
  );
}
