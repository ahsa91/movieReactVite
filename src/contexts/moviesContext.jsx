import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

// Define the MoviesContextProvider component
const MoviesContextProvider = (props) => {
  // Define state variables using useState hook
  const [favourites, setFavourites] = useState([]); // State for favourite movies
  const [myReviews, setMyReviews] = useState({}); // State for user reviews
  const [playlists, setPlaylists] = useState([]); // State for playlists

  // Function to add a movie to favourites
  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };
  // Function to add a playlist
  const addToPlaylists = (playlist) => {
    let updatedPlaylists = [...playlists];
    if (!playlists.includes(playlist.id)) {
      updatedPlaylists.push(playlist.id);
    }
    setPlaylists(updatedPlaylists);
  };

  // Function to remove a movie from favourites
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };
  // Function to remove a playlist
  const removeFromPlaylists = (playlist) => {
    setPlaylists(playlists.filter((pId) => pId !== playlist.id));
  };

  // Function to add a review for a movie
  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  // Render the MoviesContextProvider component
  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylists,
        removeFromPlaylists,

      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
