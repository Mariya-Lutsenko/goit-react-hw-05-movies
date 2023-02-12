import styles from './Searchbar.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';



const Searchbar =({onSubmit}) => {
    const [search, setSearch] = useState('');

    const handleChange = ({ target }) => {
        setSearch(target.value);
        console.log(search)
      };
      const handleSubmit = event => {
        event.preventDefault();
   
        // if (search.trim() === '') {
        //   toast.error('Enter your search query');
        //   return;
        // }
    
        onSubmit(search);
        setSearch('');
      };


return (
    <div className={styles.searchbar}>
    <form className={styles.searchForm}> onSubmit={handleSubmit}
  <input
   onChange={handleChange}
   className={styles.SearchForm__input}
   name="search"
   type="text"
   autoComplete="off"
   autoFocus
   placeholder="Search movie"
   value={search}
  ></input>
  <button type="submit" className={styles.SearchForm__button}>
          <span className={styles.SearchForm__button__label}>Search</span>
        </button>
    </form>
    </div>
)
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
export default Searchbar;