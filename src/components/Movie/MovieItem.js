import './MovieItem.css';
import Card from '../UI/Card';
import MovieDate from './MovieDate';


const MovieItem = (props) => {
    const movie = props.movie;
    // console.log("movie", movie);
    const clickHandler = () => {
        props.onClick(movie.id);
    }
    return (
        <li onClick={clickHandler}>
            <Card className="movies-item">
                <MovieDate date={movie.releaseDate} />
                <div className="movies-item_description">
                    <h2 >{movie.title}</h2>
                    <div className="movies-item_img"><img src={movie.imageUrl} alt={movie.title} /></div>
                </div>
            </Card>
        </li>

    );
}

export default MovieItem;