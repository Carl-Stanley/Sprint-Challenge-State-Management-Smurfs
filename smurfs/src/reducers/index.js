

import {
    FETCHING_START,
    SENDING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    SENDING_FAILURE,    
    SENDING_SUCCESS   
  } from "../actions";
  
  const startupState = {    
    data: null,
    dataSend: null, 
    isFetching: false,
    error: ""
  };
  
  export const smurfreducer = (state = startupState, action) => {
    
    switch (action.type) {
       
        case FETCHING_SUCCESS:
            return {
              ...state,
              isFetching: false,
              data: action.payload
            };
          
            case FETCHING_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: "Error: fetching smurfs failed!"
            };
            
            case FETCHING_START:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
          
          case SENDING_START:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
            
            case SENDING_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: "Error: No data returned!"
            };
          
           case SENDING_SUCCESS:
            return {
              ...state,
              isFetching: false,
              data: action.payload
            };
        
      default:

        return state;
    }
  };