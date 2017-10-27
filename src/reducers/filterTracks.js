const initiaState = '';

export default function filterTracks(state = initiaState, action) {
    if(action.type === 'FIND_TRACK') {
        return action.payload;
    }
       return state;
}