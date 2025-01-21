import React, { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addToFav = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <IconButton
      onClick={addToFav}
      aria-label="add-to-favorite"
      color={isFavorite ? "error" : "default"}
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
