import React from 'react';
export default function Smurf({ data }) {

    if (!data) return <h2>Loading Smurfs...</h2>

    return(

        <div className="smurf-card">

            <h3>Name: {data.name}</h3>

            <h3>Age: {data.age}</h3>            
            
            <h3>Height: {data.height}</h3>
           
        </div>
)}