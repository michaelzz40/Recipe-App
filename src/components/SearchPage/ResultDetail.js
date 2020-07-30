import React, { Fragment } from "react";
import "./ResultDetail.css";

const ResultDetail = ({ recipe, setShow }) => {
  return (
    <Fragment>
      <div class='backdrop' onClick={setShow}></div>
      <div class='ingredient-details'>
        <button class='back-btn' onClick={setShow}>
          Go back
        </button>
        <img src={recipe.recipe.image} alt='' class='ingredient-img' />
        <h2 className='recipe-title'>{recipe.recipe.label.substring(0, 30)}</h2>
        <div className='health-labels'>
          {recipe.recipe.dietLabels.length !== 0 ? (
            recipe.recipe.dietLabels.slice(0, 3).map((label, index) => {
              return (
                <p key={index} className='labels'>
                  {label.length >= 12 ? label.substring(0, 12) + "..." : label}
                </p>
              );
            })
          ) : (
            <div className='no-diet'>
              <p>No Diet Info</p>
            </div>
          )}
        </div>
        <h2 className='ingredient-title'>Ingredients</h2>
        <ul className='ingredient-lists'>
          {recipe.recipe.ingredientLines
            .slice(0, 5)
            .map((ingredient, index) => {
              return (
                <Fragment>
                  <li>
                    <span className='ingredient-index'>{index + 1}. </span>
                    <span className='ingredient-name'>{ingredient}</span>
                  </li>
                </Fragment>
              );
            })}
        </ul>
      </div>
    </Fragment>
  );
};

export default ResultDetail;
