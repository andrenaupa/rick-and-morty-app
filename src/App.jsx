import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ResidentInfo from './components/ResidentInfo';
import axios from "axios";

function App() {

  const [ indexLocation, setIndexLocation ] = useState("");
  const [ location, setLocation ] = useState({});

  useEffect(() => {
    const randomIndexLocation = Math.floor(Math.random() * 126 ) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomIndexLocation}`)
         .then(res => setLocation(res.data));
  }, []);

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${indexLocation}`)
         .then(res => setLocation(res.data));
  };


  return (
  <div className="App">
    <div className="container">
      <Header />
      <div className='body'>
        <h1>Rick and Morty Wiki</h1>
        <q>Gubba nub nub doo rah kah</q>
        <div className='body__search'>
              <input type="text" value={indexLocation} onChange={e => setIndexLocation(e.target.value)}/>
              <button onClick={searchLocation}>Search</button>
        </div>
        <div className="body__results">
          <h2>Name: {location.name}</h2>
          <div>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>Population: {location.residents?.length}</p>
          </div>
        </div>
        <ul className='body__cards'>
          {
            location.residents?.map((url) => (
              <ResidentInfo key={url} url={url}/>
            ))  
          }
        </ul>
      </div>
      <Footer />
    </div>
  </div>
  )
}

export default App;
