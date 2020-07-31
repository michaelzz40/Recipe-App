import React, { Fragment } from "react";
import "./Result.css";
import ResultItem from "./ResultItem";

const Result = props => {
  return (
    <Fragment>
      <section className='search-result'>
        <div className='container results'>
          {props.recipe.map((recipe, index) => {
            return <ResultItem key={index} recipe={recipe} />;
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Result;
