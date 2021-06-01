import Card from '../UI/Card';
import './Movies.scss'
import './MovieFullView.scss';
import backArrow from '../../images/back-arrow.svg';

const MovieFullView = (props) => {
    const movie = props.movie;
    const backClickHandler = () => {
        props.onBack();
    }
    return (
        <Card className="movies">
            <div onClick={backClickHandler} className="back-arrow">
                <img src={backArrow} alt="Back Arrow" />
            </div>
            <div className="movie-full-view">
                <img id="poster" src={movie.imageUrl} alt="Avatar" />
                <span id="rank">Rank. {movie.rank}</span>
                <span id="releaseDate">Release Date - {movie.releaseDate}</span>
                <div className="movie-full-view_description">
                    <h2><b>{movie.title}</b></h2>
                    <p>{movie.synopsis}</p>
                </div>
            </div>
        </Card>
    );
}

export default MovieFullView;