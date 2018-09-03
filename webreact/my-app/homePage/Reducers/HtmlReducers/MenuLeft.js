let initData = {
    listType:''
}
export default (state = initData,action={}) => {
    switch(action.type){
        case "LISTTYPE":
            return {
                ...state,
                listType:action.listType
            }
            break;
    }
    return state;
}