import React from 'react';
// import { Link } from 'react-router-dom';
import './PlantListItem.css';

export default function PlantListItem({ plant }) {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{plant.name}Plant Name</h3>

            </div>

        </div>
    )
}