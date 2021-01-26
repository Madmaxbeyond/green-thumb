import React from 'react';
import { Link } from 'react-router-dom';

export default function PlantCard() {
    return (
        <div>
            <h1>Plant Name Here!</h1>
            <div>
                <Link to='/'>Return to Home</Link>
            </div>
        </div>
    );
}