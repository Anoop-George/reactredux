const initialState={loggedinUser:'nodata'}

const loginuserdata=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':{return {loggedinUser:action.payload}}
        default: return state
    }
}

export default loginuserdata