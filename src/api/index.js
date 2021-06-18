import { getMovie } from "../actions/index";

// http://localhost:3000/assets/data.json
const baseURL = "http://localhost:3000";

const getData = (dispatch) => {
  //fetch(baseURL + '/assets/top5Movies.json'

  // we can directly access top5Movies.json
  fetch("/assets/top5Movies.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      dispatch(getMovie(myJson.components));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getData };
