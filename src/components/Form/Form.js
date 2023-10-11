import './Form.css';
import React, { useState, useRef} from 'react';

export default function Form() {
    


    return( 
        <form className='new-post-form' >
                <div className='new-post-inputs'>
                    <label>
                        Title: 
                        <input type='text' title='title'placeholder='Title'></input>
                    </label>
                    <label>
                        Date:
                        <input type='num' placeholder='Date'></input>
                    </label>
                </div>
                <div>
                    <label>
                        Post:
                        <input type='text' placeholder='Journal Entry' size={200}></input>
                    </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
    )
}