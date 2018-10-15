const defaultState = {
    portAreaId: "41558",
    year:'2017'
}
const App = (state = defaultState, actions = {}) => {
    switch (actions.type) { 
        case 'get_port_area_id':
            return {
                ...state,
                shipId: actions.portAreaId
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