import './MovieFilter.css';

const MovieFilter = (props) => {

    const yearSelectHandler = (e) => {
        props.onChangeFilter(e.target.value.toString());
    }
    return (
        <div className='movies-filter'>
            <div className='movies-filter__control'>
                <label>Top 5 Movies</label>
                <select value={props.selected} onChange={yearSelectHandler}>
                    <option value="select" > Select</option>
                    <option value="releaseDate" > Sort By Release Date</option>
                    <option value="rank"> Sort By Rank</option>
                </select>
            </div>
        </div>
    );
};

export default MovieFilter;