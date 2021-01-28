import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as plantAPI from '../../utilities/plants-api';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import PlantListPage from '../PlantListPage/PlantListPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import EditPlantPage from '../EditPlantPage/EditPlantPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function getPlants() {
      const plants = await plantAPI.getAll();
      setPlants(plants);
    }
    getPlants();
  }, [])

  async function handleAddPlant(newPlantData) {
    const newPlant = await plantAPI.create(newPlantData);
    setPlants([...plants, newPlant]);
  }

  const history = useHistory();

  useEffect(() => {
    history.push('/')
  }, [plants, history]);

  async function handleUpdatePlant(updatedPlantData) {
    const updatedPlant = await plantAPI.update(updatedPlantData);
    const newPlantArray = plants.map(plant => {
      return plant._id === updatedPlant._id ? updatedPlant : plant
    })
    setPlants(newPlantArray);
  }

  async function handleDeletePlant(plantId) {
    await plantAPI.deleteOne(plantId);
    setPlants(plants.filter(plant => plant._id !== plantId));
  }


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route exact path="/plants/add">
                <AddPlantPage 
                  plants={plants}
                  handleAddPlant={handleAddPlant}
                />
              </Route>

              <Route exact path='/plants'>
                <PlantListPage 
                  plants={plants}
                  handleDeletePlant={handleDeletePlant} 
                />
              </Route>

              <Route>
                <EditPlantPage exact path='/plants/edit'
                  handleUpdatePlant={handleUpdatePlant}
                />
              </Route>
              
              <Redirect to="/plants"/>
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
