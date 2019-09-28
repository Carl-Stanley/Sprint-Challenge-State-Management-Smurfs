import React from 'react';
import Smurf from './SmurfCard';

export default function MySmurfs({ data }) {
    
    if (!data) return <h2>Loading Smurfs...</h2>
    return(
        <div className="smurf-Cards">
            
            {data.map( smurf => {

                return (
                    
                 <Smurf data={smurf} key={smurf.id} />
                )
        
        })}
        
        </div>
)}