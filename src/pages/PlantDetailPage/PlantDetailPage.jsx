import React, {useState, useEffect} from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import { useLocation, Link } from 'react-router-dom';
// import * as plantAPI from '../../utilities/plants-api';

export default function PlantDetailPage({handleDeletePlant, handleWaterPlant}) {
    // const [wateredPlant, setWateredPlant] = useState(null);
    const { state: {plant} } = useLocation();
    
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = `${plant.nextWateringDate}` - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            // seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });    

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
            {/* Countown/timer here: */}
            <div className='form-container'>
                <h2>Time left until next watering: </h2>
                <h3>{timerComponents.length ? timerComponents : <span>Time to water {plant.name} today!</span>}</h3>
            </div>

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
                    pathname: '/plants/confirm-water',
                    state: {plant}
                    }}
                  
                // style={inputStyle}
            >
                {/* Or called Watered, a button that resets the countdown timer above to match frequency of watering */}
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