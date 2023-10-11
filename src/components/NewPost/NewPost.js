import React, { useState } from 'react';
import './NewPost.css'
import Form from '../Form/Form';

export default function NewPost() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    };

    return (
        <div className='new-post-window'>
            <button className='add-post' onClick={toggleVisibility}>
                {isVisible ? '+': '+'}
            </button>
        {isVisible && (
            <Form />
        )}
        </div>
    )
}