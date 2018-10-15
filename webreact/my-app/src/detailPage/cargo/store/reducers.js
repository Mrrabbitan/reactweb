const defaultState = {
    cargoType: 'iron',
    year:'2017'
}
const App = (state = defaultState, actions = {}) => {
    switch (actions.type) { 
        case 'get_type':
            return {
                ...state,
                cargoType:actions.cargoType
            }
        case 'get_year':
            return {
                ...state,
                year: actions.year
            }
        default:
            return state;
    }
}
export default App; 