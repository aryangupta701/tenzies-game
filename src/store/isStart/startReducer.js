import {TOGGLE} from './startTypes'

const initialState = {
    isStart : false
}

const startReducer = (state=initialState, action)=>{
    switch(action.type){
        case TOGGLE : return {
            ...state, 
            isStart : !state.isStart
        }
        default : return state
    }
}

export default startReducer