import { getMovie } from '../actions/index';

// http://localhost:3000/assets/data.json

const getData = (dispatch) => {
    fetch('http://localhost:3000/assets/top5Movies.json'
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    ).then(function (response) {
        return response.json();
    }).then(function (myJson) {
        console.log(myJson);
        dispatch(getMovie(myJson.components[1].items));
    }).catch((err) => {
        console.log(err);
    });
}


const addData = (dispatch) => {

    fetch("http://localhost:3000/assets/data.json", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": 3,
            "title": "Amrit",
            "body": "Amrit kumar"
        })
    }).then(res => res.json())
        .then(myJson => {
            console.log(myJson);
        }).catch((error) => {
            console.error('Error:', error);
        });
}

export { getData };