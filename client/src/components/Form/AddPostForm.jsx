import React, { useState } from 'react';
import "./FormCSS/Form.css";



const AddPostForm = () => {
    const todayDate = new Date(Date.now()).toLocaleDateString();
  return (
    <>
      <div className="form-container">
        <form action="" className="form-content">
        <label htmlFor="" className='label-content'>Enter Post Name</label>
          <input
            type="text"
            placeholder='Enter Post Name'
            className='input-content'
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Enter Organization Name</label>
          <input
            type="text"
            placeholder='Enter Organization Name'
            className='input-content'
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Registration Open Date</label>
          <input
            type="date"
            className='input-content'
            min="02/15/2023"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="" className='label-content'>Registration Close Date</label>
          <input
            type="date"
            placeholder='Enter Post Name'
            className='input-content'
            min="02/15/2023"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            required
          />
        </form>
      </div>
    </>
  )
};

export default AddPostForm;