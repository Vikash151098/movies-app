import './MovieItem.scss';
import '../../index.scss';
import Card from '../UI/Card';
import MovieDate from './MovieDate';


const MovieItem = (props) => {
    const movie = props.movie;
    const clickHandler = () => {
        props.onClick(movie.id);
    }
    return (
        <li onClick={clickHandler}>
            <Card className="movies-item ">
                <div className="movies-item_description">
                    <img className="movies-item_img" src={movie.imageUrl} alt={movie.title} />
                    <h2>{movie.title} <p>Rank-{movie.rank}</p></h2>

                </div>
                <MovieDate date={movie.releaseDate} />
            </Card>
        </li>

    );
}

export default MovieItem;