let s={

    Name:"",
    Email:""
}
function reducer(state=s,action)//state=s default state
{
    switch(action.type)
    {
        case "name":
            console.log("action name",action,action.name)
            return {
                ...state,Name:action.name
            }
            case "email":
            console.log("action email",action,action.email)
        return {
            ...state,Email:action.email
        }
        default:
            return state;
    }
}
export default reducer;