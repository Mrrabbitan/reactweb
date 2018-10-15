import { GET_EVERYDAY} from './actionTypes';

//全局data
export const getEveryday = (data) => { 
    return {
        type: GET_EVERYDAY,
        data
    }
}
