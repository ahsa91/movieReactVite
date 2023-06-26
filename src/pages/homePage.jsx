import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const HomePage = () => {
  // Use the useQuery hook from react-query to fetch movie data
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  // If the data is still loading, display a spinner
  if (isLoading) {
    return <Spinner />;
  }

  // If there is an error, display the error message
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Extract the movie results from the data object
  const movies = data ? data.results : [];

  // Render the PageTemplate component with the fetched movies and the AddToFavouritesIcon component as the action
  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};

export default HomePage;
