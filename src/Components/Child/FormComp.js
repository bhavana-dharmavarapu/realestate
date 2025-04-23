import React, { useState } from 'react'
import Titles from './Titles';
import Data from '../../data.json';
import { Link } from 'react-router-dom'



const FormComp = () => {

    const title = Data.filter((item) => item.id === 9);

    const[isSubmitted, setIsSubmitted] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);


        const existingData = JSON.parse(localStorage.getItem('formData')) || [];
        const newFormData = { ...formData }; 
        localStorage.setItem('formData', JSON.stringify([...existingData, newFormData]));


        setSubmittedData(newFormData);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 10000);

        
        setFormData({
            ...formData
        });

        e.target.reset();
    }
  return (
    <div className='form'>
        <Titles data = {title}/>

        <form className="form-content" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                <input type="tel" name="number" placeholder="Mobile" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <textarea name="message" placeholder='Your Message' required onChange={handleChange}/>
                
                <button type="submit" className="submit-btn">Submit</button>
            </form>


            {isSubmitted && (
                <div className="popup">
                    <h3 className='form-submit'>Form submitted successfully!</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Mobile:</strong> {submittedData.number}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Message:</strong> {submittedData.message}</p>
                </div>
            )}

            
            <a href="/table" target="_blank">
                <button className="view-data-btn">View Users Data</button>
            </a>
            
      
    </div>
  )
}

export default FormComp
