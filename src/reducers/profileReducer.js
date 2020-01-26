import {
    GET_PROFILE,
    SEARCH_LIST,
    RELATIONSHIP
  } from "../actions/type";
  import people from './../services/people'
  const initialState = {
    profile: people,
    relationships: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PROFILE:
        return {
          ...state,
          profile: action.payload
        };
        case SEARCH_LIST:
          return {
            ...state,
            profile: action.payload
          };
        case RELATIONSHIP:
          return {
            ...state,
            relationships : true,
            profile: action.payload
          };
      default:
        return state;
    }
  }