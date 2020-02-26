import Axios from 'axios'
import * as Types from './types'

//axios is async and but the below function is sync, so how we can send data to server 
//yes in this case redux thunk will help us 

export const register = (user,history) => dispatch => {


        console.log(user);
        Axios.post('https://jsonplaceholder.typicode.com/posts/', {
            "userId": 1,
            "title": user.username,
            "body": user.email
        })
            .then(res=>{
                console.log(res)
                console.log(res.data.id)
                console.log(res.data.body)
                console.log("Done sent successfull")
                dispatch({
                    type: Types.SET_USER,
                    payload: {user:{"name":"username", "email":"emailfromdynamic@gmail.com", "password":"adilpass"}}
                })
                history.push('/login')
            })
            .catch(error=>{
                dispatch({
                    type: Types.USERS_ERROR,
                    payload: {
                        error: error.response.data
                    }

                })
            })

}

export const login =(user, history)=>dispatch=>{

    Axios.post('https://jsonplaceholder.typicode.com/posts/', {
        "userId": 1,
        "title": user.username,
        "body": user.password
    })
    .then(res=>{
        console.log(res.data);
        dispatch({
            type: Types.SET_USER,
            payload: {user:{"name":"login user", "password":"adilpass"}}
        })
        history.push('/about')
        
    })
    .catch(error=>{
        console.log(error)
    })
}