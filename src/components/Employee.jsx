import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import config from '../config.js';

function Employee() {

    const {ticketId} = useParams();

    const [query , setQuery] = useState();

    useEffect(()=>{
        fetch(`${config.API_URI}/Emp/${ticketId}`)
        .then((res) => res.json())
        .then((data) =>{

        })
    } , [])
  return (
    <div>
      
    </div>
  )
}

export default Employee
