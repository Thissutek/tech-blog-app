import { useState } from 'react';
import './BlogPost.css';

export default function BlogPost() {
    return(
        <div className='blog-box'>
            <h3>Title</h3>
            <p>Date</p>
            <div>
                <p placeholder='paragraph'>Today I finished the notes to thinking in React and now I'm slowly structuring my app by creating the components first with no logic or use of state yet. I'm also making the css and how it looks first because I'm still getting used to how the React framework works. I also make a git for it so at least I can add progress over time I'm going to take a little break before I continue further because I feel a little overwhelmed and maybe a little not fully planned out cause of other components I need such as a way to add a new blog post delete one. But Ima take a break for now and get back to it and add more to my journal. 
</p>
                <img src=''></img>
            </div>
        </div>
    )
}