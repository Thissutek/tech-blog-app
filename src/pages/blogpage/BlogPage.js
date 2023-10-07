import './BlogPage.css'
import BlogPost from '../../components/BlogPost/BlogPost';
import NewPost from '../../components/NewPost/NewPost';
import { Outlet, Link } from 'react-router-dom';

export default function BlogPage() {
    return (
        <>
        <div className='blog-container'>
            <NewPost />
            <BlogPost />
        </div>
            <Outlet />
        </>
    );
}