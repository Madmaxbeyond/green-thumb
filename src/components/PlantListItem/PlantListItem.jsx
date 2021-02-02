import React from 'react';
import { Link } from 'react-router-dom';
import './PlantListItem.css';

export default function PlantListItem({ plant, schedules }) {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{plant.name} - {plant.type}</h3>

                <Link 
                    className='button'
                    to={{
                        pathname: '/plants/details',
                        state: {plant, schedules}
                    }}
                >
                    See Details
                </Link>
                
            </div>

        </div>
    )
}