import React, { useState, Fragment } from "react";
import ResultDetail from "./ResultDetail";

const ResultItem = ({ recipe }) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className='card'>
        <img src={recipe.recipe.image} alt='' />
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
        <div className='info'>
          <label className='calories'>Calories:</label>
          <p className='calories-info'>
            {Math.ceil(recipe.recipe.calories)} <span class='unit'>kcal</span>
          </p>
        </div>
        <div className='info'>
          <label className='calories'>Fat:</label>
          <p className='calories-info'>
            {Math.ceil(recipe.recipe.digest[0].total)}{" "}
            <span class='unit'>{recipe.recipe.digest[0].unit}</span>
          </p>
        </div>
        <div className='info'>
          <label className='calories'>Protein:</label>
          <p className='calories-info'>
            {Math.ceil(recipe.recipe.digest[2].total)}{" "}
            <span class='unit'>{recipe.recipe.digest[2].unit}</span>
          </p>
        </div>
        <div className='info'>
          <label className='calories'>Carbs:</label>
          <p className='calories-info'>
            {Math.ceil(recipe.recipe.digest[1].total)}{" "}
            <span class='unit'>{recipe.recipe.digest[1].unit}</span>
          </p>
        </div>
        <button
          onClick={() => setShow(prev => !prev)}
          className='recipe-detail'
        >
          Show more
        </button>
      </div>
      {show ? (
        <ResultDetail recipe={recipe} setShow={() => setShow(prev => !prev)} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ResultItem;
