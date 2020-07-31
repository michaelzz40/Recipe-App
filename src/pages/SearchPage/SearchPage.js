import React, { useState, useEffect } from "react";
import Searchbar from "../../components/SearchPage/Searchbar";
import Result from "../../components/SearchPage/Result";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Pagination from "../../components/SearchPage/Pagination";

const SearchPage = () => {
  const [query, setQuery] = useState("Egg");
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [show, setShow] = useState(false);

  const lastIndex = perPage * page;
  const firstIndex = lastIndex - perPage;
  let totalPage = 0;
  if (recipe) {
    totalPage = Math.ceil(recipe.count / perPage);
  }

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=${firstIndex}&to=${lastIndex}`
        );
        setRecipe(res.data);
        setLoading(false);

        console.log(res.data);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [firstIndex, lastIndex]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSearch = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=${firstIndex}&to=${lastIndex}`
      );
      setRecipe(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      setLoading(false);
    }
  };

  const paginate = page => {
    setPage(page);
  };

  const showHandler = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <section className='search-section'>
      <Searchbar query={query} search={onChange} find={onSearch} />
      {loading && <LoadingSpinner />}
      <Pagination
        perPage={perPage}
        total={totalPage && totalPage}
        paginate={paginate}
        page={page}
      />

      {recipe && <Result recipe={recipe.hits} />}
      <Pagination
        perPage={perPage}
        total={totalPage && totalPage}
        paginate={paginate}
        page={page}
      />
    </section>
  );
};

export default SearchPage;
