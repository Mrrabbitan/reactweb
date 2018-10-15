const defaultState = {
    data:[],
}
const reducer = (state = defaultState, actions = {}) => {
    switch (actions.type) { 
        case 'get_everyday':
            return {
                ...state,
                data:actions.data
            }
        default:
            return state;
    }
}
export default reducer; 