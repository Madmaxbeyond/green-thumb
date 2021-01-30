import React, { useState, useRef, useEffect } from 'react';

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
    
  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlant(formData);
  }
  
  // Helper function to turn plant names to Title Case (this doesn't quite work, does not allow caps lock)
  // function toTitleCase(str) {
  //   return str.replace(
  //     /\w\S*/g,
  //     function (txt) {
  //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //     }
  //     );
  //   }
    
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