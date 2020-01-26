import {
    GET_PROFILE,
    SEARCH_LIST,
    RELATIONSHIP
  } from "./type";
  import people from './../services/people'
  import _ from 'lodash'
  // get current profile
  export const getCurrentProfile = () => dispatch => {
    dispatch({
      type: GET_PROFILE,
      payload: people
    });
  };
  // search filter list
  export const filterSearchList = (relationship,search) => dispatch => {
    let searchList;
    if(!relationship){
      searchList = _.filter(people, item => {
        let fullName = item.first_name.concat(item.last_name).toLocaleLowerCase()
        return fullName.includes(search.toLocaleLowerCase())
      })
    }else{
      searchList = people.reduce((r, {id,relationships}) => {
        let o = relationships.filter(({last_Name,first_name}) => last_Name.includes(search) || first_name.includes(search));
        if(o && o.length)
          r.push({id, relationships : [...o]});
        return r;
      },[]);
      console.log(searchList)
    }
    dispatch({
      type: SEARCH_LIST,
      payload: searchList
    });
  };
