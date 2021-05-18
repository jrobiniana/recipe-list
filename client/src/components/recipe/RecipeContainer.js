import React, {useState, useEffect} from 'react';

import RecipeDetail from './RecipeDetail';
import RecipeList from './RecipeList';
import { Grid, List } from '@material-ui/core';
import axios from 'axios';


function RecipeContainer() {
  const [recipeList, setRecipeList] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    axios('http://localhost:3001/recipes')
      .then(response => {
        setRecipeList(response.data)
      })
    axios('http://localhost:3001/specials')
      .then(response => {
        setSpecials(response.data)
      })
  }

  const getRecipe = ( selectedRecipe, index ) => {
    setSelectedIndex(index);
    setRecipe(selectedRecipe);
  }

  return (
    <Grid
      container
      direction="row"
      className="container"
    >
      <Grid item xs={3}>
        <List
          className="list"
        >
          {
            recipeList.map(( r, index ) => (
              <RecipeList
                key={r.uuid}
                recipe={r} 
                index={index} 
                getRecipe={getRecipe}
                selectedIndex={selectedIndex}
              />
            ))
          }
        </List>
      </Grid>
      <Grid item xs={9}>
        {
          (Object.entries(recipe).length === 0 ?
            <></>
            :
            <RecipeDetail 
              recipe={recipe}
              specials={specials}
            />)
        }
      </Grid>
    </Grid>
  );
}

export default RecipeContainer;
