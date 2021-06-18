import "./MovieFilter.scss";

const MovieFilter = (props) => {
  const selectHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="movies-filter">
      <div className="movies-filter__control">
        <label>Top 5 Movies</label>
        <select value={props.selected} onChange={selectHandler}>
          <option value="select">Select</option>
          {props.orderSelectData.map((orderData) => (
            <option
              key={orderData.valueToOrderBy}
              value={orderData.valueToOrderBy}
            >
              {orderData.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MovieFilter;
