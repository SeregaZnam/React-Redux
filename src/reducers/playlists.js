const initiaState = [
    'My home playlist',
    'My work playlist'
];

export default function playlists(state = initiaState, action) {
    if(action.type === 'ADD_PLAYLIST') {
        return state;
    }else if(action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
}