import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


/// import { createStore } from 'redux';

// function playlist(state = [], action) {
// 	if(action.type == 'ADD_TRACK') {
// 		return [
// 			...state,
// 			action.payload
// 		]
// 	}
// 	return state;
// }

// const store = createStore(playlist);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.trackInput')[0];


// store.subscribe(() => {
// 	const list = document.querySelectorAll('.list')[0];
// 	list.innerHTML = '';
// 	trackInput.value = '';
// 	store.getState().forEach(track => {
// 		const li = document.createElement('li');
// 		li.textContent = track;
// 		list.appendChild(li);
// 	});
// });

// addTrackBtn.addEventListener('click', () => {
// 	const trackName = trackInput.value;
// 	console.log('trackName', trackName);
// 	store.dispatch({ type: 'ADD_TRACK', payload: trackName});
// })