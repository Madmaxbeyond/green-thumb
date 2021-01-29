import React, { useEffect, useState } from 'react';
import './PlantListPage.css';
import PlantListItem from "../../components/PlantListItem/PlantListItem";
// import AddPlantPage from '../AddPlantPage/AddPlantPage';
import * as plantAPI from '../../utilities/plants-api';

export default function PlantListPage({ plants, handleDeletePlant}) {
    const [newplants, setPlants] = useState([]);

    useEffect(() => {
      async function getPlants() {
        const plants = await plantAPI.getAll();
        setPlants(plants);
      }
      getPlants();
    }, [])

    return (
      <>
        <h1>My Plants</h1>
        <div className="PlantListPage-grid">
            {plants.map(plant => 
                <PlantListItem 
                    plant={plant}
                    key={plant._id}
                    handleDeletePlant={handleDeletePlant}
                />
            )}
            {/* Leave this in case you want to add plants on same page as List */}
                {/* <AddPlantPage
                    plant={props.plant}
                    key={props.plant._id}
                    handleAddPlant={props.handleAddPlant}
                    // handleDeletePlant={props.handleDeletePlant}
                />             */}
        </div>
      </>
    );
}