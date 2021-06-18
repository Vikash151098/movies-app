import { useState } from "react";
import Card from "../UI/Card";
import "./Movies.scss";
import MovieFilter from "./MovieFilter";
import MovieList from "./MovieList";
import MovieFullView from "./MovieFullView";

const Movies = (props) => {
  const [sortType, setSortType] = useState("select");
  const [expandView, setExpandView] = useState(false);
  const [movie, setMovie] = useState({});

  const orderSelect = props.items[0].items;
  const filterMovies = props.items[1].items;

  const filterChangeHandler = (sortType) => {
    setSortType(sortType);
  };

  const onClickHandler = (id) => {
    setExpandView(true);
    const data = filterMovies.filter((movie) => movie.id === id);
    setMovie(data[0]);
  };
  const onBackHandler = () => {
    setExpandView(false);
    setMovie({});
  };

  if (sortType === "select") {
    filterMovies.sort((a, b) => a.id - b.id);
  } else {
    filterMovies.sort((a, b) => a[sortType] - b[sortType]);
  }

  return expandView ? (
    <MovieFullView onBack={onBackHandler} movie={movie} />
  ) : (
    <Card className="movies">
      <MovieFilter
        orderSelectData={orderSelect}
        selected={sortType}
        onChangeFilter={filterChangeHandler}
      />
      <MovieList onClick={onClickHandler} items={filterMovies} />
    </Card>
  );
};

export default Movies;
