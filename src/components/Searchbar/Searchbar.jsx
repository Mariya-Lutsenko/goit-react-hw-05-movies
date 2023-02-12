import styles from './Searchbar.module.css';
import PropTypes from 'prop-types'
import { useState } from 'react';
const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => {
    setQuery(target.value);
    console.log(query)
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };



  return (
  <div className={styles.searchbar}>
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.SearchForm__input}
        onChange={handleChange}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
      ></input>
      <button type="submit" className={styles.SearchForm__button}>
        <span className={styles.SearchForm__button__label}>Search</span>
      </button>
    </form>
  </div>)
};
export default Searchbar;


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };