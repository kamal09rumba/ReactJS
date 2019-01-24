import $ from "jquery"
export const UPDATE_USER = "users:updateUser"
export const API_REQUEST_ERROR = "users:showError"

export function updateUser(newUser){
    return {
            type: UPDATE_USER,
            payload: {
                user: newUser
            }
    }
}

export function showError(){
    return{
        type: API_REQUEST_ERROR,
        payload: {
            user: 'Error!!!'
        }
    }
}

export function apiRequest(){
    return dispatch => {
        $.ajax({
            url:'localhost:8000',
            success(response){
                console.log('success')
                // dispatch(updateUser(response.newUser))
            },
            error(){
                console.log('error')
                dispatch(showError())
            }

        })
    }
}
