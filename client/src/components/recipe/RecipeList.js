import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const RecipeList = ({
  recipe,
  index,
  getRecipe,
  selectedIndex
}) => {
  return (
    <ListItem
      button
      selected={selectedIndex === {index}}
      onClick={(event) => getRecipe(recipe, index)}
      alignItems="flex-start"
      className="list-item"
    >
      <ListItemAvatar>
        <Avatar variant="square" alt={recipe.title} src={recipe.images.small} />
      </ListItemAvatar>
      <ListItemText primary={recipe.title} />
    </ListItem>
  );
}

export default RecipeList;
