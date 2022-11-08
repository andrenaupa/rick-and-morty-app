import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ResidentInfo = ({url}) => {

  const [ resident, setResident ] = useState({});

  useEffect(()=>{
    axios.get(url)
         .then(res => setResident(res.data));
  }, []);

  // console.log("=================");
  console.log(resident);

  return (
    <li className='resident-card'>
      <div className='resident-image'>
        <img src={resident.image} alt=""  style={{width: '100%'}}/>
      </div>
      <div className='resident-data'>
        <h3>Name: {resident?.name}</h3>
        <hr />
        <p>Status: {resident.status}</p>
        <p>Origin: {resident.origin?.name}</p>
        <p>Episodes where appear: {resident.episode?.length}</p>
      </div>
    </li>
  )
};

export default ResidentInfo;