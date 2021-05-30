import { useState } from 'react';
import Card from '../UI/Card';
import './Movies.css'
import MovieFilter from './MovieFilter';
import MovieList from './MovieList';
import MovieFullView from './MovieFullView';


const Movies = (props) => {
    const [sortType, setSortType] = useState('');
    const [expandView, setExpandView] = useState(false);
    const filterMovies = props.items;

    const filterChangeHandler = (sortType) => {
        setSortType(sortType);
    }

    const onClickHandler = (id) => {
        // setExpandView(true);
        console.log(id);
        const data = filterMovies.filter((movie) => movie.id === id);
        console.log(data);
    }

    if (sortType === "rank") {
        filterMovies.sort((a, b) => a.rank - b.rank);
    }
    else if (sortType === "releaseDate") {
        filterMovies.sort((a, b) => a.releaseDate - b.releaseDate);
    }
    else {
        filterMovies.sort((a, b) => a.id - b.id);
    }

    return expandView ? (<MovieFullView />) : (
        < Card className="movies" >
            <MovieFilter
                selected={sortType}
                onChangeFilter={filterChangeHandler} />
            <MovieList onClick={onClickHandler} items={filterMovies} />
        </Card >
    );
}

export default Movies;