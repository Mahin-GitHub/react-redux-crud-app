import React from 'react';
import "./ShowBooks.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../Redux/BookSlice/BookSlice';
import { Link } from 'react-router-dom';

const ShowBooks = () => {
    const books = useSelector((state)=> state.bookReducer.books);
    console.log(books);
    const dispatch = useDispatch();

    const handleDelete = (id) => {

        dispatch(deleteBook(id));

    }
    return (
        <div>
            <h2>Show Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        
                        books && books.map((book) => {
                            const {id,title,author} = book;
                            return (
                                <tr key = {id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>
                                        <Link to={"/edit-book"} state={{id,title,author}}>
                                        <button>Edit</button>
                                        
                                        </Link>
                                        <button onClick={()=>handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
                  
            </table>
        </div>
    );
};

export default ShowBooks;