import list from '../data/listOfCapitals';
import comments from '../data/comments';

const initialState = {
    test: 'test',
    data: list,
    comments: comments
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'MORE_CLIKED':
        return {
            test: action.name
        }
        case 'INCREMENT_LIKES':
        console.log(state.data);
        const i = action.test;
        return {
            ...state, 
            test: action.test,
            data: [...state.data.slice(0,i), 
                   {...state.data[i], likes: state.data[i].likes + 1},
                   ...state.data.slice(i+1)]
        }
        case 'ADDING_COMMENT':
        return {
            ...state,
            comments: {
                ...state.comments,
                [action.cityName]: [
                    ...state.comments[action.cityName],
                    {name: action.author, comment: action.comment}
                ]
            }
            
        }
        case 'DEL_COMMENT': 
        console.log(action)
        return {
            ...state,
            comments: {
                ...state.comments,
                [action.cityName]: [
                   ...state.comments[action.cityName].slice(0, action.i),
                   ...state.comments[action.cityName].slice( action.i + 1)
                ]
            }
        }
        
        default: return state;
    }
    
}

export default reducer;