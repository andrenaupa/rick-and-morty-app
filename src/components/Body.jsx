import React from 'react'


const Body = ({name, type, dimension, residents, searchLocation, indexLocation, handleChange}) => {
  return (
    <div className='body'>
      <h1>Rick and Morty Wiki</h1>
      <q>Gubba nub nub doo rah kah</q>
      <div className='body__search'>
          {/* <form> Eliminar este form */} 
            <input type="text" onChange={(e) => handleChange(e.target.value) }/>
            <button onClick={searchLocation}>Search</button>
          {/* </form>  */}
      </div>
      <div className="body__results">
        <h2>Name: {name}</h2>
        <div>
          <p>Type: {type}</p>
          <p>Dimension: {dimension}</p>
          <p>Population: {residents?.length}</p>
        </div>
      </div>
      <ul className='body__cards'>
        {
          residents?.map((url) => (
            <ResidentInfo key={url} url={url}/>
          ))  
        }
      </ul>
    </div>
  )
}

export default Body