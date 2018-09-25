const defaultState = {
    cargoType: 'iron',
}
const App = (state = defaultState, actions = {}) => {
    switch (actions.type) { 
        case 'get_type':
            return {
                ...state,
                cargoType:actions.cargoType
            }
        default:
            return state;
    }
}
export default App; 