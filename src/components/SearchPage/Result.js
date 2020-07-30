import React, { Fragment, useState } from "react";
import "./Result.css";
import ResultItem from "./ResultItem";
import { Link } from "react-router-dom";

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
