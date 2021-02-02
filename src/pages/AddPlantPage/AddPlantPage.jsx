import React, { useState, useRef, useEffect } from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import 'fontsource-roboto';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from "@material-ui/pickers";

export default function AddPlantPage({handleAddPlant}) {
  const [invalidForm, setInvalidForm] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    datePlanted: '',
    lastWatered: '',
    frequency: ''
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);
    
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
          <label>Plant Name*</label>
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
          <label>Plant Type*</label>
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
            type='datetime-local'
            placeholder="2021"
            value={formData.datePlanted}
            onChange={handleChange}
            
          />
        </div>

        {/* <div className="form-group">
          <label>Date Last Watered*</label>
          <input
            className="form-control"
            name="lastWatered"
            type='datetime-local'
            placeholder="1-1-21"
            value={formData.lastWatered}
            onChange={handleChange}
            required
          />
        </div> */}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              fullWidth
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps = {{
                'aria-label': 'change date',
              }}
            />
        </MuiPickersUtilsProvider>

        <div className="form">
          <label>Watering Frequency*</label>
          {/* <input
            className="form-control"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            required
          /> */}
          <select name="frequency" id="" className="form-control"  >
            <option value={formData.frequency}>Once a Week</option>
            <option value={formData.frequency}>Every 10 Days</option>
            <option value={formData.frequency}>Every Two Weeks</option>
            <option value={formData.frequency}>Once a Month</option>
          </select>
       
        </div>

        <button
          type="submit"
          className="btn"
          onClick={handleSubmit}
          disabled={invalidForm}
        >
          Add Plant
        </button>
      <div>
        <p>*Required</p>
      </div>
      </form>    
    </>
  )
}