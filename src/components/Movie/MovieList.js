import MovieItem from "./MovieItem"
// import styles from './MovieItem.module.css';
import './MovieList.scss'

const MovieList = (props) => {
    const clickHandler = (id) => {
        props.onClick(id);
    }

    return (
        <ul className='movies-list' >
            {props.items.map((movie) => (
                <MovieItem onClick={clickHandler} key={movie.id} movie={movie} />
            ))}

        </ul>
    );
}

export default MovieList;