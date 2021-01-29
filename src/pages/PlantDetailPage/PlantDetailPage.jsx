import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import { useLocation } from 'react-router-dom';

export default function PlantDetailPage() {
    const { state: {plant} } = useLocation();

    return (
        <>
            <h1>Plant Detail</h1>
            <PlantCard 
                key={plant._id}
                plant={plant}
            />
        </>
    );
}