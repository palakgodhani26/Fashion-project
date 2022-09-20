// import * as ActionType from '../ActionTypes';

// const initVal = {
//     isLoading: false,
//     user: null,
//     error: ''
// }
// export const HomeReducer= (state = initVal, action) => {
//     switch (action.type) {
//         case ActionType.SIGNED_IN:
//             return {
//                 ...state,
//                 isLoading: false,
//                 user: action.payload,
//                 error: ''
//             }
//         case ActionType.SIGNED_OUT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 user: null,
//                 error: ''
//             }
//         default:
//             return state;
//     }
// }