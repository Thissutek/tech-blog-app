import { useState } from 'react';

export default function NewPost() {
    return (
        <div>
            <button>
                +
            </button>
            <form>
                <label>
                    Title:
                    <input type='text' title='title'></input>
                
                </label>
                <label>
                    Date:
                    <input type='date'></input>
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}