import React from 'react';
import './PlantListPage.css';
import PlantListItem from "../../components/PlantListItem/PlantListItem";

export default function PlantListPage(props) {
    return (
      <>
        <h1>My Plants</h1>
        <div className="PlantListPage-grid">
            {props.plants.map(plant => 
                <PlantListItem 
                    plant={plant}
                    key={plant._id}
                    handleDeletePlant={props.handleDeletePlant}
                />
            )}
        </div>
      </>
    );
}