import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import { useLocation, Link } from 'react-router-dom';
// import * as plantAPI from '../../utilities/plants-api';

export default function PlantDetailPage({handleDeletePlant, handleWaterPlant, plants, setPlants}) {
    // const [wateredPlant, setWateredPlant] = useState(null);
    const { state: {plant} } = useLocation();



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