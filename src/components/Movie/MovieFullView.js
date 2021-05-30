import styles from './MovieFullView.css';
import Card from '../UI/Card';

const MovieFullView = (props) => {
    const movie = props.movie;
    return (
        <Card className="movies">
            <div className={`${styles.card} ${styles['col-4']}`}>
                <img src={movie.imageUrl} alt="Avatar" />
                <div className={styles.container}>
                    <h4><b>{movie.title}</b></h4>
                    <p>{movie.synopsis}</p>
                </div>
            </div>
        </Card>
    );
}

export default MovieFullView;