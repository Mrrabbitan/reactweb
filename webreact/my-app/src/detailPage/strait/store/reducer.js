const defaultState={
    data:null,
    data1:null,
}

const App=(state=defaultState,action={})=>{
    switch(action.type){
        case 'get_historyflow':
            return{
                ...state,
                data:action.data
            }
        case 'get_shiptype':
            return{
                ...state,
                data1:action.data
            }
        default :
        return state

       
    }


}

export default App;