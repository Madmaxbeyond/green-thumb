import React, { useState, useRef, useEffect } from 'react';
import * as plantAPI from '../../utilities/plants-api';


export default function AddPlantPage({handleAddPlant}) {
  const [invalidForm, setInvalidForm] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    datePlanted: ''
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);


  // Arrow function version of handleSubmit:
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   handleAddPlant(formData);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlant(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
    <h1>Add New Plant</h1>
    <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Plant Name</label>
          <input
            className="form-control"
            name="name"
            placeholder="Severus Snape"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Plant Type</label>
          <input
            className="form-control"
            name="type"
            placeholder="Snake Plant"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date planted</label>
          <input
            className="form-control"
            name="datePlanted"
            placeholder="2021"
            value={formData.datePlanted}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          disabled={invalidForm}
        >
          Add Plant
        </button>
      </form>    
    </>
  )
}