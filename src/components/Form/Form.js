import './Form.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
    
    const [startDate, setStartDate] = useState(new Date());

    return( 
        <>
            <form className='new-post-form' >
                    <div className='new-post-inputs'>
                        <label>Title:</label>
                            <input type='text' title='title'placeholder='Title' size={20}></input>
                        <label>Date:</label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        <label>Post:</label>
                            <input type='text' placeholder='Journal Entry' size={200}></input>
                    </div>
                <button type='submit' className='CTA'>SUBMIT</button>
            </form>
            
        </>
    )
}