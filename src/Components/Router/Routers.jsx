import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import EditBook from '../EditBook/EditBook';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import ShowBooks from '../ShowBooks/ShowBooks';

const Routers = () => {
    return (
        <div>
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/show-books' element={<ShowBooks></ShowBooks>}></Route>
                    <Route path='/add-books' element={<AddBooks></AddBooks>}></Route>
                    <Route path='/edit-book' element = {<EditBook></EditBook>} ></Route>
                    <Route path="*" element = {<Error></Error>}> </Route>

                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
};

export default Routers;