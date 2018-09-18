const defaultState = {
    mmsi: '201100149',
    // mmsi: '997754063',
    shipId: '212848000',
    shipInfo:null
}
const App = (state = defaultState, actions = {}) => {
    switch (actions.type) { 
        case 'get_mmsi':
            return {
                ...state,
                mmsi:actions.mmsi
            }
        case 'get_ship_id':
            return {
                ...state,
                shipId: actions.shipId
            }
        case 'ship_info':
            return {
                ...state,
                shipInfo: actions.data
            }
        default:
            return state;
    }
}
export default App; 