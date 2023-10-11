import './BlogPage.css'
import BlogPost from '../../components/BlogPost/BlogPost';
import NewPost from '../../components/NewPost/NewPost';
import { Outlet, Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function BlogPage() {
    return (
        <>
        <div className='blog-container'>
            <SearchBar />
            <NewPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </div>
            <Outlet />
        </>
    );
}