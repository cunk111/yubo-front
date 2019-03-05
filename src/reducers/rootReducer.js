import { combineReducers } from 'redux'
import user from './userReducer'
import media from './mediaReducer'
import message from './messageReducer'

const rootReducer = combineReducers({
  user, media, message,
})

export default rootReducer
