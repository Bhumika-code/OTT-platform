import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from '../pages/signin/SignInPage';
import SignUpPage from '../pages/signup/SignUpPage';
import HomePage from '../pages/homepage/HomePage';
import DashBoard from '../pages/dashboardpage/DashBoard';
import Movie from '../pages/movie/Movie';
import TvSeries from '../pages/tvseries/TvSeries';
import Bookmark from '../pages/BookMarks/BookMark';


const Routings = () => {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />}>
                    <Route path="/home/dashboard" element={<DashBoard />} />
                    <Route path="/home/movie" element={<Movie />} />
                    <Route path="/home/tvseries" element={<TvSeries />} />
                    <Route path="/home/bookmark" element={<Bookmark />} />
                    <Route index element={<Navigate to="/home/dashboard" />} />
                </Route>
                <Route index element={<Navigate to="/signin" />} />
            </Routes>
        </>
    );
};

export default Routings;