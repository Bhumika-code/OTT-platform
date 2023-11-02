import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "../pages/signin/SignInPage";
import SignUpPage from "../pages/signup/SignUpPage";
import HomePage from "../pages/homepage/HomePage";
import DashBoard from "../pages/dashboardpage/DashBoard";
import Movie from "../pages/moviegenre/MovieGenre";
import TvSeries from "../pages/tvgenre/TvGenre";
import Bookmark from "../pages/BookMarks/BookMark";
import MovieDetails from "../pages/moviedetails/MovieDetails";
import GenreCategory from "../pages/genrecategory/GenreCategory";
import TvGenreCategory from "../pages/tvgenrecategory/TvGenreCategory";
import TvDetails from "../pages/tvdetails/TvDetails";

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
          <Route
            path="/home/dashboard/moviedetails/:id"
            element={<MovieDetails />}
          />
          <Route path="/home/dashboard/tvdetails/:id" element={<TvDetails />} />
          <Route
            path="/home/movie/genrecategory/:id"
            element={<GenreCategory />}
          />
          <Route
            path="/home/tvseries/tvgenrecategory/:id"
            element={<TvGenreCategory />}
          />
          <Route index element={<Navigate to="/home/dashboard" />} />
        </Route>
        <Route index element={<Navigate to="/signin" />} />
      </Routes>
    </>
  );
};

export default Routings;
