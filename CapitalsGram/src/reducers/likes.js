import list from '../data/listOfCapitals';

const initialState = {
    name: 'test',
    data: list
}

const likes = (state=initialState, action) => {
    console.log(state, action);
    return state;
}

export default likes;