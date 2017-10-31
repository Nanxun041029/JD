import React from 'react';
import ReactDOM from 'react-dom';
import './style/zhuye.scss'
import App from './router/index';
import registerServiceWorker from './registerServiceWorker';

import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import IndexReducer from './reducers/IndexReducer'
import ZmdReducer from './reducers/ZmdReducer'
import Lunbo from './reducers/Lunbo'
import Lunbo1 from './reducers/Lunbo1'
import Index_listReducers from './reducers/Index_listReducers'




const recuders = combineReducers({
	list:IndexReducer,
	list1:IndexReducer,
	lbt:ZmdReducer,
	sk:Lunbo,
	sl:Lunbo1,
	shop:Index_listReducers
})
const store = createStore(recuders,{})

function renderPage(){
		ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage)

registerServiceWorker();
