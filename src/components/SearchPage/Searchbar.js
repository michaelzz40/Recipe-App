import React from "react";
import "./Searchbar.css";

const Searchbar = props => {
  return (
    <div className='searchbar container'>
      <form onSubmit={e => props.find(e)}>
        <input
          type='text'
          placeholder='Search for recipes'
          value={props.query}
          onChange={e => props.search(e)}
        />
        <i
          className='search-icon fa fa-search'
          aria-hidden='true'
          onClick={e => props.find(e)}
        ></i>
      </form>
    </div>
  );
};

export default Searchbar;
