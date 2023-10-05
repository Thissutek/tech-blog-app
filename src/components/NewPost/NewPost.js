import { useState } from 'react';
import './NewPost.css'

export default function NewPost() {
    return (
        <div className='new-post-window'>
            <button className='add-post'>
                +
            </button>
            <form>
                <label>Title:</label>
                <input type='text' title='title'></input>
                <label>
                    Date:
                    <input type='num'></input>
                </label>
                <label>
                    Post:
                    <input type='text'></input>
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}