import React from 'react';
// import { Link } from 'react-router-dom';

export default function PlantCard({plant, schedules}) {
    return (
        <>
        <div className='form-container'>
            <h2>Name: {plant.name}</h2>
            <h3>Plant Type: {plant.type}</h3>
            <h4>Date Planted: {plant.datePlanted}</h4>
            <h4>Last watered: {plant.lastWatered}</h4>
            {/* {plant.schedules.map(sched => <div>{sched.nextWateringDate}</div>)} */}
            
        </div>
        <br/>
        </>
    );
}