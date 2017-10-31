import React from 'react';
import ReactDOM from 'react-dom';
import './style/zhuye.scss'
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import IndexReducer from './reducers/IndexReducer'
import FenleiReducer from './reducers/FenleiReducer'





const recuders = combineReducers({
	list:IndexReducer,
	lists:FenleiReducer,
	groupList:FenleiReducer
})
const store = createStore(recuders,{})

function renderPage(){
		ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage)

registerServiceWorker();
