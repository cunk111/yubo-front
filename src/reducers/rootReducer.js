import { combineReducers } from 'redux'
import users from './userReducer'
import media from './mediaReducer'
import messages from './messageReducer'

const rootReducer = combineReducers({
  users, media, messages,
})

export default rootReducer
