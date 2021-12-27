const initialState = {
    users:[],
    user:{},
    hireuser:[],
    loading:false,
}

const userReducer = (state=initialState, action )=>{
   switch(action.type){
        case"GET_USERS":{
            return{
                ...state,
                users:action.payload
            }
        }
        case"GET_USER":{
            return{...state}
        }
        case"LOADING":{
            return{
                ...state, loading:!state.loading
            }
        }
        case"HIRE_USER":{
            return{
                ...state, 
                hireuser:[...state.hireuser,action.payload]
            }
        }
    }
    return state
}

export default userReducer