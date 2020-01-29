import {
    GET_PROFILE,
    SEARCH_LIST
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
  export const filterSearchList = (relationship, search, intrestfilters) => dispatch => {
   // filter logic 
    var finalObj=[];
      if(search.length > 0 ){
        people.filter(currentVal=>{
          if(currentVal.first_name.toLowerCase().includes(search) || currentVal.last_name.toLowerCase().includes(search)){
            return finalObj.push(currentVal);
          }
          if (relationship && currentVal.relationships.length>0){
            currentVal.relationships.filter(currentChild=>{
              if(currentChild.first_name.toLowerCase().includes(search) || currentChild.last_Name.toLowerCase().includes(search)){
                return finalObj.push(currentVal);
              }
            })
          }
          intrestfilters.filter(value=>{
            if(currentVal.interest.includes(value)){
              return finalObj.push(currentVal);
            }else if(currentVal.relationships.length>0){
              currentVal.relationships.filter(currentChild=>{
                if(currentChild.first_name.includes(value)){
                  return finalObj.push(currentVal);
                }
              })
            }
          })
          return finalObj;
        });
        let uniqData = new Set(finalObj)
        finalObj = [...uniqData] 
      }else{
        return finalObj = people
      }
    dispatch({
      type: SEARCH_LIST,
      payload: finalObj
    });
  };
