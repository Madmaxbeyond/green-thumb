import React from 'react';
import { Link } from 'react-router-dom';

export default function PlantCard({plant}) {
    return (
        <div>
            <h1>Plant Name Here!{plant.name} - {plant.type}</h1>
            <div>
                <Link to='/plants'>Return to Plant List</Link>
            </div>
        </div>
    );
}