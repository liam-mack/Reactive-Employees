import React, { useState } from "react";
import './app.scss';
import Directory from './components/Directory/Directory'
import Searchbar from './components/Searchbar/Searchbar';
import employees from './db/employees.json';
// import Images from './images/Images'

function App() {
  const [query, setQuery] = useState("");
  const [isSorted, getSorted] = useState(null);
  const [db, getDirectory] = useState(employees);


  // Sort database entries comparatively and return respective values to ascend/descend in order
  const searchQuery = () => {
        // return (isSorted ? )
        if (!isSorted) {
          getDirectory(db.sort((employeeX, employeeY) => (employeeX.name > employeeY.name ? 1: -1)));
          getSorted(true);
        } else {
          getDirectory(db.sort((employeeX, employeeY) => (employeeX.name > employeeY.name ? -1 : 1)));
          getSorted(false);
        }
  }

  // Allows for further search functions to be added
  const startSearchQuery = (e) => {
    setQuery(e.target.value)
  }
  
// Filter names from database based on Search query after parsing to lowercase
  let displayedDirectory =  db.filter((employee) => {
    return employee.name.toLowerCase().startsWith(query.toLocaleLowerCase())
  });

  return (
    <div className="App">
      < Searchbar searched = {query} sortingName = {startSearchQuery} startSorting = {searchQuery} />
      < Directory seeds={displayedDirectory} />
    </div>
  );
}

export default App;
