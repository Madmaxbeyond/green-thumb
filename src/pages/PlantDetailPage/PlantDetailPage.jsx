import React, {useState, useEffect} from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import { useLocation, Link } from 'react-router-dom';
// import * as plantAPI from '../../utilities/plants-api';

export default function PlantDetailPage({handleDeletePlant, handleWaterPlant, plants, setPlants}) {
    // const [wateredPlant, setWateredPlant] = useState(null);
    const { state: {plant} } = useLocation();

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`1/${year}`) - +new Date();
        
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)                
            };
        }
        return timeLeft;
    };

    


    // let inputStyle = {
    //     border: '5px solid pink'
    // };

    // if(plant.isWatered === true) {
    //     inputStyle = {
    //         border: '5px solid green'
    //     }
    // }

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

            <Link
                className='button'
                    to={{
                    pathname: 'plants/confirm-water',
                    state: {plant}
                    }}
                onClick={handleWaterPlant}    
                // style={inputStyle}
                // onClick={plant.lastWatered = new Date()}
            >
                Water Me!
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