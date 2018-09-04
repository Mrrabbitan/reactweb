const initSate = {
    id:'27999'
}
export default (state = initSate,action={}) => {
    switch(action.type){
        case "PORTID":
            return {
                ...state,
                id:action.id
            }
            break;
    }
    return state;
}