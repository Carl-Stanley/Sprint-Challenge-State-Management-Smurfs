import axios from "axios";

export const FETCHING_SUCCESS = "FETCHING_SUCCESS";

export const SENDING_START = "SENDING_START";

export const SENDING_FAILURE = "SENDING_FAILURE";

export const SENDING_SUCCESS = "SENDING_SUCCESS";

export const FETCHING_START = "FETCHING_START";

export const FETCHING_FAILURE = "FETCHING_FAILURE";





export const sendSmurfs = ({name, age, height }) => dispatch => {
    dispatch({ type: SENDING_START });
    axios
      .post("http://localhost:3333/smurfs", {
        name,
        age,
        height
      })
      .then(res => {
        
        dispatch({ type: SENDING_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SENDING_FAILURE, payload: err });
      });
  };

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILURE, payload: err.data.slip });
    });
};


