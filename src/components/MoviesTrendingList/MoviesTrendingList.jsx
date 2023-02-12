import {Link, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

const MoviesTrendingList = ({movies}) =>{
    const location = useLocation();
    return (
        <ul>
            {movies && movies.map(({id, title}) => 
            
            (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{from: location}}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );

}

MoviesTrendingList.propTypes = {
    movies: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}

export default MoviesTrendingList;