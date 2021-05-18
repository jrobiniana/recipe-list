import React from 'react';
import { Grid, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

function RecipeDetail({
  recipe,
  specials
}) {

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <h2>{recipe.title}</h2>
      <span>{recipe.description}</span>
      <span></span>
      <p><b>Servings: </b>{recipe.servings}</p>
      <p><b>Preparation Time: </b>{recipe.prepTime}</p>
      <p><b>Cooking Time: </b>{recipe.cookTime}</p>
      <p><b>Ingredients:</b></p>
      <Table aria-label="simple table">
        <TableBody>
          {
            recipe.ingredients
              ? recipe.ingredients.map((item, i) => {
                let special = specials.find(o => o.ingredientId === item.uuid)
                return(
                  <TableRow key={item.uuid}>
                    <TableCell align="left">{item.amount}</TableCell>
                    <TableCell align="left">{item.measurement}</TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">
                      {
                        special
                          ? <>
                              <span>{special.title}</span> <br/>
                              <span>{special.type}</span> <br/>
                              <span>{special.text}</span> <br/>
                            </>
                          : <></>
			    	  }
                    </TableCell>
                  </TableRow>
                )})
              : <></>
          }
        </TableBody>
      </Table>
      <p></p>
      <p><b>Directions:</b></p>
      {
        recipe.directions?
          recipe.directions.map((item, i) => (
            <p key={i}>{i+1}. {item.instructions}</p>
          ))
          :
          <p></p>
      }
    </Grid>
  );
}

export default RecipeDetail;
