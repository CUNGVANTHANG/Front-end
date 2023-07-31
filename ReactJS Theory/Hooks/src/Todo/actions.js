import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

export const setJob = payload => {
    return {
      type: SET_JOB,
      payload
    }
  }
  
export const addJob = payload => {
    return {
      type: ADD_JOB,
      payload
    }
  }
  
export const deleteJob = payload => {
    return {
      type: DELETE_JOB,
      payload
    }
  }