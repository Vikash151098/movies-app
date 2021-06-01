import './MovieDate.scss'

const MovieDate = (props) => {

    const year = props.date;

    return (
        <div className="movie-date">
            <div className="movie-date_year">{year}</div>
            {/* <div className="movie-date_month">{month}</div> */}
            {/* <div className="movie-date_day">{day}</div> */}
        </div>
    );
}

export default MovieDate;