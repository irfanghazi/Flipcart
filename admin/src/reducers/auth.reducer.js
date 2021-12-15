
const initState = {
    token:null,
    user:{
        firstName:'',
        lastName:'',
        email:'',
        picture:''
    },
    authenticate:false,
    authenticating:false
}

export default (state  =initState, action)=>{
    console.log(action)
    switch (action.type) {
        case LOGIN_REQUEST:
            state= {
                ...state,
                 ...action.payload
            }
            
            break;
    
        default:
            break;
    }
}