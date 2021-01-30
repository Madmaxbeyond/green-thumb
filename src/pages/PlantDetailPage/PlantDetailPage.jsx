import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import { useLocation, Link } from 'react-router-dom';

export default function PlantDetailPage({handleDeletePlant}) {
    const { state: {plant} } = useLocation();

    return (
        <>
            <h1>Plant Detail</h1>
            <PlantCard 
                key={plant._id}
                plant={plant}
            />
            <Link 
                className='button'
                    to={{
                    pathname: '/plants/edit',
                    state: {plant}
                    }}
            >
                Edit Plant
            </Link>

            <button
                className='button'
                onClick={() => handleDeletePlant(plant._id)}
            >
                Delete Plant
            </button>

            <div>
                <Link to='/plants'>Return to Plant List</Link>
            </div>
        </>
    );
}