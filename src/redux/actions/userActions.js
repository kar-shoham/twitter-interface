import axios from "axios"
import { server } from "../store"
import { getLoginError, setLoadingFalse, setLoadingTrue } from "../reducers/userReducer"

export let getUserProfile = () => async(dispatch) => {
  try {
    dispatch(setLoadingTrue())
    let data = await axios.get(`${server}/me`, {withCredentials: true})
    dispatch(setLoadingFalse())
    console.log(data)
  } catch (error) {
    console.log(error.response)
    dispatch(setLoadingFalse())
  }
}