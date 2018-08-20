import toolMap from '../../Components/Basic/Map/Other/ToolMap';

const initState = {

};


export default (state = initState,action={}) => {
    switch(action.type){
        case "LOADALLPORT":
            return action.data;
            break;
    }
    return state;
}