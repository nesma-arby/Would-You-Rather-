import {RECEIVE_USERS, USER_ANSWER_QUESTION , USER_CREATE_QUESTION} from '../action-types'
import { getInitialData } from '../utils/api'
import {receive_questions} from '../actions/questions'

// Get All users
export const receive_users = (data) => {
    const action = {
      type: RECEIVE_USERS ,
      data
   }  
   return action;
  }

  
  export function loadData(){
    return(dispatch) => {
       return  getInitialData()
       .then((response)=> {
            dispatch(receive_users(response.users))
            dispatch(receive_questions(response.questions))
        })    
    }
   }


  // Add user question
  export const add_user_question = (authedUser, qid) => {
    const action = {
      type: USER_CREATE_QUESTION ,
      authedUser, 
      qid
   }
   return action;
  }


  // save user answer
  export const save_user_answer = (authedUser, qid, answer) => {
    const action = {
      type: USER_ANSWER_QUESTION ,
      authedUser, 
      qid,
      answer
   }
   return action;
  }




 

