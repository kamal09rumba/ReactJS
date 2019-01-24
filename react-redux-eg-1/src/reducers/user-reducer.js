import { UPDATE_USER,API_REQUEST_ERROR } from "../actions/user-actions"

const userReduer = (state=[], action) => {
    switch(action.type){
        case UPDATE_USER:
         return action.payload.user
        case API_REQUEST_ERROR:
         return action.payload.user
        default:
            return state
    }
}
export default userReduer
