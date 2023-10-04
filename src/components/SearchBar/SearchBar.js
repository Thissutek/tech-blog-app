import React, { useState, useCallback } from 'react';
import './SearchBar.css';

export default function SearchBar() {
    return (
        <form className='SearchBar'>
            <input type='text' placeholder='Search...' />

        </form>
    );
}