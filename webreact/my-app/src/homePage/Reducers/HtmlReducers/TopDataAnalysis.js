let initData = {
    dataType:''
}
export default (state = initData,action={}) => {
    switch(action.type){
        case "DATATYPE":
            return {
                ...state,
                dataType:action.dataType
            }
            break;
    }
    return state;
}