import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from '../Redux/BookSlice/BookSlice';

const EditBook = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({id,title,author}));
        navigate("/show-books", {replace:true});
        
    }
    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title : </label>
                <input type="text"
                id='title'
                name='title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                required
                 />
            </div>

            <div>
                <label htmlFor="author">Author : </label>
                <input type="text"
                id='author'
                name='author'
                
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                required
                 />
            </div>
            <button type='submit'>Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;<h2>Edit Book</h2>