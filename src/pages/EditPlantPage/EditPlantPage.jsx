import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditPlantPage(props) {
    const location = useLocation();
    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.plant);
    const formRef = useRef();


    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdatePlant(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }    

    return (
        <>
            <h1>Edit Plant</h1>
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
                Save Plant Changes
                </button>
                <Link to="/plants">Cancel</Link>
      </form>            
        </>
    )
}