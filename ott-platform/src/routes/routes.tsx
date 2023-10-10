
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInPage from '../pages/signin/SignInPage';
import SignUpPage from '../pages/signup/SignUpPage';
import HomePage from '../pages/homepage/HomePage';

const Routings = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>


        </>
    );
};

export default Routings;