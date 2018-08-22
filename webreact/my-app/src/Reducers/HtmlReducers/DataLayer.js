let initData = {
    ship:[],
    port:[]
}
export default (state = initData,action={}) => {
    switch(action.type){
        case "DATALAYER":
            return action.dataLayer;
            break;
    }
    return state;
}