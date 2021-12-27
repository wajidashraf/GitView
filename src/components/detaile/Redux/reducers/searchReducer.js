const initialState = {
    searchedUsers: [],
    isClear: false,
    show:true,
}

const searchReducer = (state=initialState,action)=>{
    console.log(action)
    if(action.type==='GET_SEARCHED_USERS'){
        return{
            ...state,
            searchedUsers:action.payload
        }
    }
return state
}
export default searchReducer;